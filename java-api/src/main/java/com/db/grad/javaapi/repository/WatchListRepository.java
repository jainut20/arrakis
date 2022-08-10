package com.db.grad.javaapi.repository;

import com.db.grad.javaapi.model.WatchList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WatchListRepository extends JpaRepository<WatchList,Long> {
    public List<WatchList> findByUserid(long userid);
    @Query("select w from WatchList w where w.securityid = :securityid and w.userid = :userid")
    public WatchList findWatchList(long securityid, long userid);
}
