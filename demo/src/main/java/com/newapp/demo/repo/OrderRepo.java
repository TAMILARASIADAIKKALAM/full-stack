package com.newapp.demo.repo;
import org.springframework.data.jpa.repository.JpaRepository;

import com.newapp.demo.model.Order;

public interface OrderRepo extends JpaRepository<Order, Long> {

}

