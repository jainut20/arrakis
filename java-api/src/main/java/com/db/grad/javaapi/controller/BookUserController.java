package com.db.grad.javaapi.controller;

import com.db.grad.javaapi.model.BookUser;
import com.db.grad.javaapi.repository.BookUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BookUserController {

    @Autowired
    private BookUserRepository bookUserRepository;

    @PostMapping("/bookuser")
    public String createBookUser(@RequestBody BookUser bookUser){
        System.out.println(bookUser.getBookid() + " " + bookUser.getUserid());
        bookUserRepository.saveAndFlush(bookUser);
        return "done";
    }
}
