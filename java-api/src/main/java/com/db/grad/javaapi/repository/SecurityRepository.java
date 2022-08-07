package com.db.grad.javaapi.repository;

import com.db.grad.javaapi.model.Security;
import com.db.grad.javaapi.model.Trade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.util.List;


@Repository
public interface SecurityRepository extends JpaRepository<Security,Long> {

//    public List<Security> findByuserid(long userid);

    @Query("select s from Security s where s.maturitydate <= :enddate and s.maturitydate >= :startdate")
    public List<Security> findByDateRange(@Param("startdate") Date startDate, @Param("enddate") Date endDate);

    Security findTopByOrderByIdDesc();

}   

