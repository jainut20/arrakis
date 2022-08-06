package com.db.grad.javaapi.repository;

import com.db.grad.javaapi.model.BookUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookUserRepository extends JpaRepository<BookUser,Long> {

}
