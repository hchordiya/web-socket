package com.example.todoapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.todoapp.models.Todo;

public interface TodoRepository extends JpaRepository<Todo, Long> {

}
