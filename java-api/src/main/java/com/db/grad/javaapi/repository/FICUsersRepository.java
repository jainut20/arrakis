package com.db.grad.javaapi.repository;

import com.db.grad.javaapi.model.FICUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FICUsersRepository extends JpaRepository<FICUser,Long> {
    FICUser findByUsername(String username);
}
