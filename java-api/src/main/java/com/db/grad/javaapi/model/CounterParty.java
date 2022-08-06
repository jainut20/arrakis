package com.db.grad.javaapi.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class CounterParty {
    @Id
    private long id;
    private String name;

  
    public CounterParty(){  }

    public CounterParty(long id, String name) {
        this.id = id;
        this.name = name;
    }

    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
}
