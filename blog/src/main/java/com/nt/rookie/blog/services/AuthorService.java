package com.nt.rookie.blog.services;

import com.nt.rookie.blog.dtos.Author;
import com.nt.rookie.blog.entities.AuthorEntity;
import com.nt.rookie.blog.exceptions.NotFoundException;
import com.nt.rookie.blog.mappers.AuthorMapper;
import com.nt.rookie.blog.repositories.AuthorRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class AuthorService {

    private AuthorRepository repository;

    public AuthorService(AuthorRepository repository) {
        this.repository = Objects.requireNonNull(repository);
    }

    public List<Author> getAll(){
        return AuthorMapper.toDtoList(this.repository.findAll());
    }

    public Author getUsername(String username){
        return AuthorMapper.toDto(repository.findById(username).orElseThrow(() -> new NotFoundException("Author Username : " + username + " Not Found")));
    }

    public Author createAuthor(AuthorEntity author){
        return AuthorMapper.toDto(repository.save(author));
    }
}
