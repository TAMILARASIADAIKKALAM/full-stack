package com.newapp.demo.service;

import com.newapp.demo.DTO.OrderDTO;
import java.util.List;


public interface OrderService {
    List<OrderDTO> getAllOrders();
    OrderDTO getOrderById(Long orderId);
    OrderDTO createOrder(OrderDTO orderDTO);
    OrderDTO updateOrder(Long orderId, OrderDTO orderDTO);
    void deleteOrder(Long orderId);
}
