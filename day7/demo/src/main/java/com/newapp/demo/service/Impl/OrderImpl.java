package com.newapp.demo.service.Impl;

import java.util.ArrayList;
import java.util.List;


import org.springframework.stereotype.Service;

import com.newapp.demo.DTO.OrderDTO;
import com.newapp.demo.mapper.OrderMapper;
import com.newapp.demo.model.Order;
import com.newapp.demo.repo.OrderRepo;
import com.newapp.demo.service.OrderService;
import com.newapp.demo.exception.ResourceNotFoundException;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor

public class OrderImpl implements OrderService
{
    private OrderRepo orderRepo;

    @Override
    public OrderDTO createOrder(OrderDTO u)
    {
        Order r=OrderMapper.maptoOrder(u);
        Order saved=orderRepo.save(r);
        return OrderMapper.maptoOrderDto(saved);
    }

    @Override
    public OrderDTO getOrderById(Long orderid)
    {
       Order u=orderRepo.findById(orderid).orElseThrow(()->new ResourceNotFoundException("User is not exist with given id:"+orderid));
       return OrderMapper.maptoOrderDto(u);
    }

    @Override
    public List<OrderDTO> getAllOrder()
    {
       List<Order> li=orderRepo.findAll();
       List<OrderDTO> lis=new ArrayList<>();
       for(Order u:li)
       {
         lis.add(OrderMapper.maptoOrderDto(u));
       }
       return lis;
    }
}
