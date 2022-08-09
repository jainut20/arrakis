package com.db.grad.javaapi.repository;

import com.db.grad.javaapi.model.FICUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface FICUsersRepository extends JpaRepository<FICUser,Long> {
    FICUser findByEmail(String email);
}
