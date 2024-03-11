package com.newapp.demo.service.Impl;

import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;
import com.newapp.demo.DTO.CustomerDTO;
import com.newapp.demo.mapper.CustomerMapper;
import com.newapp.demo.model.Customer;
import com.newapp.demo.repo.CustomerRepo;
import com.newapp.demo.service.CustomerService;
import com.newapp.demo.exception.ResourceNotFoundException;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor

public class CustomerImpl implements CustomerService {

  private CustomerRepo CustomerRepo;

  @Override
  public CustomerDTO createCustomer(CustomerDTO u) {
    Customer r = CustomerMapper.maptoCustomer(u);
    Customer saved = CustomerRepo.save(r);
    return CustomerMapper.maptoCustomerDto(saved);
  }

  @Override
  public CustomerDTO getCustomerById(Long customerid) {
    Customer u = CustomerRepo.findById(customerid)
        .orElseThrow(() -> new ResourceNotFoundException("User is not exist with given id:" + customerid));
    return CustomerMapper.maptoCustomerDto(u);
  }

  @Override
  public List<CustomerDTO> getAllCustomer() {
    List<Customer> li = CustomerRepo.findAll();
    List<CustomerDTO> lis = new ArrayList<>();
    for (Customer u : li) {
      lis.add(CustomerMapper.maptoCustomerDto(u));
    }
    return lis;
  }
}
