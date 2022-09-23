package com.nt.rookie.blog.repositories;

import com.nt.rookie.blog.entities.PostEntity;

import org.springframework.data.repository.CrudRepository;

public interface PostRepository extends CrudRepository<PostEntity, Integer> {
}
