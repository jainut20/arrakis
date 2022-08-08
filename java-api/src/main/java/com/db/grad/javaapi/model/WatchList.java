package com.db.grad.javaapi.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class WatchList {

    @Id @GeneratedValue
    private long id;
    private long securityid;
    private long userid;

    public WatchList() {
    }

    public WatchList(long securityid, long userid) {
        this.securityid = securityid;
        this.userid = userid;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getSecurityid() {
        return securityid;
    }

    public void setSecurityid(long securityid) {
        this.securityid = securityid;
    }

    public long getUserid() {
        return userid;
    }

    public void setUserid(long userid) {
        this.userid = userid;
    }
}
