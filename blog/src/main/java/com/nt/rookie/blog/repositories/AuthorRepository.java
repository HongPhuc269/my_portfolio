package com.nt.rookie.blog.repositories;

import com.nt.rookie.blog.entities.AuthorEntity;

import org.springframework.data.repository.CrudRepository;

public interface AuthorRepository extends CrudRepository<AuthorEntity, String> {
}
