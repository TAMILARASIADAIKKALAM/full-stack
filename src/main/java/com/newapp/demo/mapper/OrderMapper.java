package com.newapp.demo.mapper;

import com.newapp.demo.DTO.OrderDTO;
import com.newapp.demo.model.Order;

public class OrderMapper {

    public static OrderDTO mapToOrderDTO(Order order) {
        OrderDTO orderDTO = new OrderDTO();
        orderDTO.setOrderId(order.getOrderId());
        orderDTO.setOrdername(order.getOrdername());
        orderDTO.setOrderprice(order.getOrderprice());
        orderDTO.setOrderdetails(order.getOrderdetails());
        return orderDTO;
    }

    public static Order mapToOrder(OrderDTO orderDTO) {
        Order order = new Order();
        order.setOrderId(orderDTO.getOrderId());
        order.setOrdername(orderDTO.getOrdername());
        order.setOrderprice(orderDTO.getOrderprice());
        order.setOrderdetails(orderDTO.getOrderdetails());
        return order;
    }
}

