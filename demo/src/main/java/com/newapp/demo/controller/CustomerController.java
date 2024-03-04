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

import com.newapp.demo.DTO.CustomerDTO;
import com.newapp.demo.service.CustomerService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/cust")

public class CustomerController {

    private CustomerService custser;

    // Build Add Employee REST API
    @PostMapping
    public ResponseEntity<CustomerDTO> createCustomer(@RequestBody CustomerDTO customerDTO) {
        CustomerDTO savedUser = custser.createCustomer(customerDTO);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

    // Build Get Employee REST API
    @GetMapping("{id}")
    public ResponseEntity<CustomerDTO> getCustomerById(@PathVariable("id") Long CustomerId) {
        CustomerDTO userDto = custser.getCustomerById(CustomerId);
        return ResponseEntity.ok(userDto);
    }

    // Build Get All Employee REST API
    @GetMapping
    public ResponseEntity<List<CustomerDTO>> getAllUser() {
        List<CustomerDTO> user = custser.getAllCustomer();
        return ResponseEntity.ok(user);
    }

}

