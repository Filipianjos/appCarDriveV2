package com.spring.angular.carDrive.controllers;

import com.spring.angular.carDrive.models.Client;
import com.spring.angular.carDrive.repositories.Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class Controller {
    @Autowired
    private Repository action;

    @PostMapping("/")
    public Client create(@RequestBody Client client){
        return action.save(client);
    }

    @GetMapping("/")
    public Iterable<Client> reader(){
        return action.findAll();
    }


    @PutMapping("/")
    public Client update(@RequestBody Client client){
        return action.save(client);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable long id){
        action.deleteById(id);
    }

}
