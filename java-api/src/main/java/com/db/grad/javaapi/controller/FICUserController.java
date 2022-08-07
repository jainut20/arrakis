package com.db.grad.javaapi.controller;

import com.db.grad.javaapi.model.FICUser;
import com.db.grad.javaapi.repository.FICUsersRepository;
import jdk.jpackage.internal.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
@RestController
public class FICUserController {
    @Autowired
    private FICUsersRepository usersRepository ;

    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
    @PostMapping("/user/signup")
    public int createUser(@RequestBody FICUser user){

        try {
            user.setPassword(encoder.encode(user.getPassword()));
            usersRepository.saveAndFlush(user);
        }catch (Exception E){
            System.out.println(E.getMessage());
            return -1;
        }
        return 1;
    }

    @PostMapping("/user/login")
    public FICUser findUser(@RequestBody LoginCredentials credentials){
        try {
            FICUser user = usersRepository.findByEmail(credentials.email);

            if(user==null)
                return null; //  user not found

            if (encoder.matches(credentials.password, user.getPassword())) {
                return user; // authentication successful
            }
            return null; //  incorrect password
        }catch (Exception E){
            System.out.println(E.getMessage());
            return null;
        }
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
