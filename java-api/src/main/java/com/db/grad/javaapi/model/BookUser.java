package com.db.grad.javaapi.model;

import javax.persistence.*;
//import java.io.Serial;
import java.io.Serializable;

@Entity
@Table(name = "bookuser")
@IdClass(CompositeId.class)
public class BookUser {

//    @Id @GeneratedValue(strategy = GenerationType.AUTO)
//    private long id;
//
//    @ManyToOne @MapsId("bookid") //Column name for this table
//    private Book book;
//
//
//    @ManyToOne @MapsId("userid") //Column name for this table
//    private FICUser ficuser;

    @Id
    private long bookid;

    @Id
    private long userid;

    public  BookUser(){};
    public BookUser(long bookid, long userid) {
        this.bookid = bookid;
        this.userid = userid;
    }

    @Column(name = "bookid",nullable = false)
    public long getBookid() {
        return bookid;
    }

    public void setBookid(long bookid) {
        this.bookid = bookid;
    }

    @Column(name = "userid",nullable = false)
    public long getUserid() {
        return userid;
    }

    public void setUserid(long userid) {
        this.userid = userid;
    }
}

class CompositeId implements Serializable{
    private long bookid;
    private long userid;

    public CompositeId(){};
    public CompositeId(long bookid, long userid){
        this.bookid = bookid;
        this.userid =userid;
    }
}