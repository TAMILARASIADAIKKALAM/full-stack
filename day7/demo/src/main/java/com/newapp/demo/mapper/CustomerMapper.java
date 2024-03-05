package com.newapp.demo.mapper;

import com.newapp.demo.DTO.CustomerDTO;
import com.newapp.demo.model.Customer;

public class CustomerMapper {

    public static CustomerDTO maptoCustomerDto(Customer customer) {
            
            CustomerDTO customerDTO=new CustomerDTO();
            customerDTO.setCustomerId(customer.getCustomerId());   
            customerDTO.setCustomerName(customer.getCustomerName());
            customerDTO.setAddress(customer.getAddress());
           
            return customerDTO;
    }

    public static Customer maptoCustomer(CustomerDTO customerto) 
    {
        Customer customer=new Customer();
        customer.setCustomerId(customerto.getCustomerId());   
        customer.setCustomerName(customerto.getCustomerName());
        customer.setAddress(customerto.getAddress());
        
        return customer;
    }

}
