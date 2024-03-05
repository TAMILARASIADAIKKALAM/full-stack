package com.newapp.demo.repo;
import org.springframework.data.jpa.repository.JpaRepository;

import com.newapp.demo.model.Customer;

public interface CustomerRepo extends JpaRepository<Customer, Long> {

}

