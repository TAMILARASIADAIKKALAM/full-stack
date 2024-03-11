package com.newapp.demo.service.Impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.newapp.demo.DTO.OrderDTO;
import com.newapp.demo.mapper.OrderMapper;
import com.newapp.demo.model.Order;
import com.newapp.demo.repo.OrderRepo;
import com.newapp.demo.service.OrderService;
import com.newapp.demo.exception.ResourceNotFoundException;

import lombok.AllArgsConstructor;

@Service
public class OrderImpl implements OrderService {

    private OrderRepo orderRepository;

    @Override
    public List<OrderDTO> getAllOrders() {
        List<Order> orders = orderRepository.findAll();
        return orders.stream()
                .map(OrderMapper::mapToOrderDTO)
                .collect(Collectors.toList());
    }

    @Override
    public OrderDTO getOrderById(Long orderId) {
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new ResourceNotFoundException("Order not found with ID: " + orderId));
        return OrderMapper.mapToOrderDTO(order);
    }

    @Override
    public OrderDTO createOrder(OrderDTO orderDTO) {
        Order order = OrderMapper.mapToOrder(orderDTO);
        Order savedOrder = orderRepository.save(order);
        return OrderMapper.mapToOrderDTO(savedOrder);
    }

    @Override
    public OrderDTO updateOrder(Long orderId, OrderDTO orderDTO) {
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new ResourceNotFoundException("Order not found with ID: " + orderId));
        order.setOrdername(orderDTO.getOrdername());
        order.setOrderprice(orderDTO.getOrderprice());
        order.setOrderdetails(orderDTO.getOrderdetails());
        Order updatedOrder = orderRepository.save(order);
        return OrderMapper.mapToOrderDTO(updatedOrder);
    }

    @Override
    public void deleteOrder(Long orderId) {
        if (!orderRepository.existsById(orderId)) {
            throw new ResourceNotFoundException("Order not found with ID: " + orderId);
        }
        orderRepository.deleteById(orderId);
    }
}
