package com.newapp.demo.mapper;

import com.newapp.demo.DTO.CustomerDTO;
import com.newapp.demo.model.Customer;

public class CustomerMapper {

    public static CustomerDTO maptoCustomerDto(Customer customer) {
            
            CustomerDTO customerDTO=new CustomerDTO();
            customerDTO.setCustomerId(customerDTO.getCustomerId());   
            customerDTO.setCustomerName(customerDTO.getCustomerName());
            customerDTO.setAddress(customerDTO.getAddress());
            customerDTO.setUser(customerDTO.getUser());
            return customerDTO;
    }

    public static Customer maptoCustomer(CustomerDTO customerto) 
    {
        Customer customer=new Customer();
        customer.setCustomerId(customer.getCustomerId());   
        customer.setCustomerName(customer.getCustomerName());
        customer.setAddress(customer.getAddress());
        customer.setUser(customer.getUser());
        return customer;
    }

}
