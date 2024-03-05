package com.newapp.demo.DTO;

import com.newapp.demo.model.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor


public class CustomerDTO {
    private Long customerId;
    private String customerName;
    private String address;
    
}
