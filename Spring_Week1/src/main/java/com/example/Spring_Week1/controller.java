package com.example.Spring_Week1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller   //means this class is controller class
public class controller {
    @Autowired // This means to get the bean called userRepository
    private UserRepository userRepository;
    @PostMapping(path="/addUser") // Map ONLY POST Requests
        public @ResponseBody void addUser(@RequestBody User user) {
        userRepository.save(user);}    //Saves user data into DB

    @GetMapping(path="/all") // Map ONLY GET Requests
    public @ResponseBody Iterable<User> getAllUsers() {
        return userRepository.findAll();}  //fetches all users from DB
    @GetMapping(value = "/index")
    public String home(){  return "index";}  //returns index.html
    @GetMapping(value = "/")
    public String go2home(){  return "redirect:/index";} //redirects to index.html when url has only '/'
}

