package com.newapp.demo.mapper;

import com.newapp.demo.DTO.OrderDTO;
import com.newapp.demo.model.Order;

public class OrderMapper {

    public static OrderDTO maptoOrderDto(Order order) 
    {
       OrderDTO orderDTO=new OrderDTO();
       orderDTO.setOrderId(order.getOrderId());
       orderDTO.setOrderDate(order.getOrderDate());
       orderDTO.setOrderPrice(order.getOrderPrice());
       orderDTO.setQuantity(order.getQuantity());
      
       return orderDTO;
    }

    public static Order maptoOrder(OrderDTO orderto) {

      Order order=new Order();
      order.setOrderId(orderto.getOrderId());
      order.setOrderDate(orderto.getOrderDate());
      order.setOrderPrice(orderto.getOrderPrice());
      order.setQuantity(orderto.getQuantity());
      
      return order;    
    }

}
