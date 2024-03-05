package com.newapp.demo.model;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.sql.Date; // Import Date class



@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "orders") // Renamed table to plural form, as "Order" might be a reserved keyword
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "orderId", nullable = false)
    private Long orderId;
    @Column(name = "orderDate", nullable = false)
    private Date orderDate; // Corrected type to Date
    @Column(name = "orderPrice", nullable = false)
    private Double orderPrice; // Changed to BigDecimal for accurate representation of prices
    @Column(name = "quantity", nullable = false)
    private Double quantity;
   
//    // @ManyToOne
//    // @JoinColumn(name="gift_id",nullable = false)
//     private Gift gift;

//    // @ManyToOne
//    // @JoinColumn(name="customer",nullable=false)
//      private Customer customer;

}
