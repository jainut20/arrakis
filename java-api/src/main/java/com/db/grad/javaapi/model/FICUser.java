package com.db.grad.javaapi.model;

import javax.persistence.*;

@Entity
@Table(name = "ficuser")
public class FICUser {
    @Id @GeneratedValue
    private long id;
    private String name;
    private String email;
    private String password;
    private String role;

    public FICUser(){};

    public FICUser(String name, String email, String password, String role){
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
    }



    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }


    @Column(name = "name" , nullable = false)
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    @Column(name = "email" , nullable = false)
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    @Column(name = "password" , nullable = false)
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }


    @Column(name = "role" , nullable = false)
    public String getRole() {
        return role;
    }
    public void setRole(String role) {
        this.role = role;
    }
}
