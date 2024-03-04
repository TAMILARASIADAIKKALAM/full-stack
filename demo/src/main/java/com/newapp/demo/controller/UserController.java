package com.newapp.demo.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.newapp.demo.DTO.UserDTO;
import com.newapp.demo.service.UserService;

import lombok.AllArgsConstructor;



@AllArgsConstructor
@RestController
@RequestMapping("/api/user")

public class UserController {

    private UserService userser;

    // Build Add Employee REST API
    @PostMapping
    public ResponseEntity<UserDTO> createUser(@RequestBody UserDTO userDTO) {
        UserDTO savedUser = userser.createUser(userDTO);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

    // Build Get Employee REST API
    @GetMapping("{id}")
    public ResponseEntity<UserDTO> getUserById(@PathVariable("id") Long UserId) {
        UserDTO userDto = userser.getUserById(UserId);
        return ResponseEntity.ok(userDto);
    }

    // Build Get All Employee REST API
    @GetMapping
    public ResponseEntity<List<UserDTO>> getAllUser() {
        List<UserDTO> user = userser.getAllUser();
        return ResponseEntity.ok(user);
    }

}

