package com.db.grad.javaapi.controller;

import com.db.grad.javaapi.model.FICUser;
import com.db.grad.javaapi.repository.FICUsersRepository;
import jdk.jpackage.internal.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FICUserController {
    @Autowired
    private FICUsersRepository usersRepository ;

    @PostMapping("/user/signup")
    public int createUser(@RequestBody FICUser user){
        try {
            usersRepository.saveAndFlush(user);
        }catch (Exception E){
            System.out.println(E.getMessage());
            return -1;
        }
        return 1;
    }

    @PostMapping("/user/login")
    public FICUser findUser(@RequestBody LoginCredentials credentials){
        return usersRepository.findByEmail(credentials.email);

        // need to add authentication code
    }

}

class LoginCredentials{
    String email;
    String password;

    public LoginCredentials(String email, String password){
        this.email = email;
        this.password = password;
    }
}
