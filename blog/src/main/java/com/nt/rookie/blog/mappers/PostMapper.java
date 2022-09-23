package com.nt.rookie.blog.mappers;

import com.nt.rookie.blog.dtos.Post;
import com.nt.rookie.blog.entities.PostEntity;

import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

public class PostMapper {

  public static Post toDto(PostEntity entity) {
    Post post = new Post();
    post.setId(entity.getId());
    post.setContent(entity.getContent());
    post.setDescription(entity.getDescription());
    post.setTitle(entity.getTitle());
    post.setCreatedAt(entity.getCreatedAt());
    post.setAuthor(AuthorMapper.toDto(entity.getAuthor()));
    return post;
  }

  public static List<Post> toDtoList(List<PostEntity> entities) {
    return entities.stream().map(PostMapper::toDto).collect(Collectors.toList());
  }

  public static List<Post> toDtoList(Iterable<PostEntity> entities) {
    List<Post> posts = new LinkedList<>();
    entities.forEach( e -> posts.add(toDto(e)));
    return posts;
  }

  public static PostEntity toEntity(Post dto) {
    PostEntity entity = new PostEntity();
    entity.setId(dto.getId());
    entity.setContent(dto.getContent());
    entity.setDescription(dto.getDescription());
    entity.setTitle(dto.getTitle());
    entity.setCreatedAt(dto.getCreatedAt());
    entity.setAuthor(AuthorMapper.toEntity(dto.getAuthor()));
    return entity;
  }

}
