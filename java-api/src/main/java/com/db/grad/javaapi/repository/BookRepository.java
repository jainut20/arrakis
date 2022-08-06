package com.db.grad.javaapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.db.grad.javaapi.model.Book;
import org.springframework.stereotype.Repository;


@Repository
public interface BookRepository extends JpaRepository<Book,Long> {
    
}
