package com.nt.rookie.blog.services;

import com.nt.rookie.blog.dtos.Post;
import com.nt.rookie.blog.entities.PostEntity;
import com.nt.rookie.blog.exceptions.NotFoundException;
import com.nt.rookie.blog.mappers.PostMapper;
import com.nt.rookie.blog.repositories.PostRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class PostService {
  private PostRepository repository;

  public PostService(PostRepository repository) {
    this.repository = Objects.requireNonNull(repository);
  }

  public List<Post> getAll() {
    return PostMapper.toDtoList(this.repository.findAll());
  }

  public Post getId(Integer id) {
    return PostMapper.toDto(repository.findById(id).orElseThrow(() -> new NotFoundException("Post Id : " + id + " Not Found")));
  }

  public Post createPost(Post post){
    return PostMapper.toDto(repository.save(PostMapper.toEntity(post)));
  }

  public int deleteId(Integer id){
    repository.deleteById(id);
     return id;
  }
}
