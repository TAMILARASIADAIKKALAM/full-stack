package com.newapp.demo.service;
import java.util.List;
import com.newapp.demo.DTO.OrderDTO;


public interface OrderService 
{
    OrderDTO createOrder(OrderDTO us);
    OrderDTO getOrderById(Long orderid);
    List<OrderDTO> getAllOrder(); 
}
