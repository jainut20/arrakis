package com.db.grad.javaapi.model;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;

@Entity
@Table(name = "bookuser")
public class BookUser {

    @ManyToOne @MapsId("bookid") //Column name for this table
    private Book book;


    @ManyToOne @MapsId("userid") //Column name for this table
    private FICUser ficuser;


}
