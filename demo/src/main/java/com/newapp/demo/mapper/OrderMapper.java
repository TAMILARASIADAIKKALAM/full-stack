package com.newapp.demo.mapper;

import com.newapp.demo.DTO.OrderDTO;
import com.newapp.demo.model.Order;

public class OrderMapper {

    public static OrderDTO maptoOrderDto(Order order) 
    {
       OrderDTO orderDTO=new OrderDTO();
       orderDTO.setOrderId(orderDTO.getOrderId());
       orderDTO.setOrderDate(orderDTO.getOrderDate());
       orderDTO.setOrderPrice(orderDTO.getOrderPrice());
       orderDTO.setQuantity(orderDTO.getQuantity());
       orderDTO.setGift(orderDTO.getGift());
       orderDTO.setCustomer(orderDTO.getCustomer());
       return orderDTO;
    }

    public static Order maptoOrder(OrderDTO orderto) {

      Order order=new Order();
      order.setOrderId(order.getOrderId());
      order.setOrderDate(order.getOrderDate());
      order.setOrderPrice(order.getOrderPrice());
      order.setQuantity(order.getQuantity());
      order.setGift(order.getGift());
      order.setCustomer(order.getCustomer());
      return order;    
    }

}
