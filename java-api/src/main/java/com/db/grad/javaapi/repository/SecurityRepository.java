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

//    public Security findTopByOrderByIdDesc();

    @Query("select s from Security s where s.id in ( Select t.securityid from Trade t where t.bookid in (Select b.bookid from BookUser b where b.userid = :userid))")
    public List <Security> findByUserId(@Param("userid") Long userid);

    @Query("select t from Trade t where t.securityid = :sId")
    public List <Trade> findTradeBySecurityId(@Param("sId") Long sId);
}



