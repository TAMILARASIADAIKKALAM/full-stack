package com.newapp.demo.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.newapp.demo.DTO.AuthRequest;
import com.newapp.demo.DTO.UserDTO;
import com.newapp.demo.service.JwtService;
import com.newapp.demo.service.UserService;

import lombok.AllArgsConstructor;



@AllArgsConstructor
@RestController
@RequestMapping("/api/user")

public class UserController {

    private UserService userser;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

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

    @PostMapping("/authenticate")
    public String authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authRequest.getUserName(), authRequest.getPassword()));
        if (authentication.isAuthenticated()) {
            return jwtService.generateToken(authRequest.getUserName());
        } else {
            throw new UsernameNotFoundException("invalid user request !");
        }

    }

}

