package com.db.grad.javaapi.repository;

import com.db.grad.javaapi.model.BookUser;
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
    @Query("select s from Security s where securityid in ( Select securityid from trade where bookid in (Select bookid from bookuser where userid = :userid))")
    public List <Security> findByUserId(@Param("userid")Long userid);

    @Query("select s from trade where securityid = :sId")
    public List <Trade> findTradeBySecurityId(@Param("sId") Long sId);
}



