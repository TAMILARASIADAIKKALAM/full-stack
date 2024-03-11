package com.newapp.demo.service;

import java.util.List;
import com.newapp.demo.DTO.CustomerDTO;

public interface CustomerService {
    CustomerDTO createCustomer(CustomerDTO us);

    CustomerDTO getCustomerById(Long customerid);

    List<CustomerDTO> getAllCustomer();
}
