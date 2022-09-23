package com.nt.rookie.blog.controllers;

import com.nt.rookie.blog.dtos.Author;
import com.nt.rookie.blog.dtos.Post;
import com.nt.rookie.blog.entities.AuthorEntity;
import com.nt.rookie.blog.services.AuthorService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("authors")
public class AuthorController {
    private AuthorService service;

    public AuthorController(AuthorService service) {
        this.service = Objects.requireNonNull(service);
    }

    @GetMapping("/")
    public ResponseEntity<List<Author>> getAll() {
        return new ResponseEntity<>(service.getAll(), HttpStatus.OK);
    }

    @GetMapping("/{userName}")
    public ResponseEntity<Author> getByUserName(@PathVariable String username) {
        return new ResponseEntity<>(service.getUsername(username), HttpStatus.OK);
    }

    @PostMapping("/")
    public ResponseEntity<Author> createAuthor(AuthorEntity author){
        return new ResponseEntity<>(service.createAuthor(author),HttpStatus.CREATED);
    }
}
