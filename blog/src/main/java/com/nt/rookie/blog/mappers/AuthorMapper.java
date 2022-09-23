package com.nt.rookie.blog.mappers;

import com.nt.rookie.blog.dtos.Author;
import com.nt.rookie.blog.dtos.Post;
import com.nt.rookie.blog.entities.AuthorEntity;
import com.nt.rookie.blog.entities.PostEntity;

import java.util.LinkedList;
import java.util.List;


public class AuthorMapper {
  public static Author toDto(AuthorEntity entity) {
    Author author = new Author();
    author.setUsername(entity.getUsername());
    author.setEmail(entity.getEmail());
    author.setFirstName(entity.getFirstName());
    author.setLastName(entity.getLastName());
    author.setBirthDate(entity.getBirthDate());
    author.setCreatedAt(entity.getCreatedAt());
    return author;
  }
  public static AuthorEntity toEntity(Author author) {
    AuthorEntity authorEntity = new AuthorEntity();
    authorEntity.setUsername(author.getUsername());
    authorEntity.setEmail(author.getEmail());
    authorEntity.setFirstName(author.getFirstName());
    authorEntity.setLastName(author.getLastName());
    authorEntity.setBirthDate(author.getBirthDate());
    authorEntity.setCreatedAt(author.getCreatedAt());
    return authorEntity;
  }

  public static List<Author> toDtoList(Iterable<AuthorEntity> entities) {
    List<Author> authors = new LinkedList<>();
    entities.forEach(e -> authors.add(toDto(e)));
    return authors;
  }
}
