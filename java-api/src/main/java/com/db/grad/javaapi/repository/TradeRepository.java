package com.db.grad.javaapi.repository;

import com.db.grad.javaapi.model.Trade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface TradeRepository extends JpaRepository<Trade,Long> {

    public List<Trade> findBysecurityid(long securityid);
    Trade findTopByOrderByIdDesc();
}

