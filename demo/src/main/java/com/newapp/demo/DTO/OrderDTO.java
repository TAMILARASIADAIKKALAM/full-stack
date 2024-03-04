package com.newapp.demo.DTO;

import java.sql.Date;
import com.newapp.demo.model.Customer;
import com.newapp.demo.model.Gift;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class OrderDTO {
    private Long orderId;
    private Date orderDate;
    private Double orderPrice;
    private Double quantity;
    private Gift gift;
    private Customer customer;


}
