package com.newapp.demo.model;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor


@Entity
@Table(name = "orders") // Renamed table to plural form, as "Order" might be a reserved keyword
public class Order 
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "orderId", nullable = false)
    private Long orderId;
    @Column(name="ordername",nullable=false)
    private String ordername;
    @Column(name="orderprice",nullable=false)
    private Double orderprice;
    @Column(name="orderdetails",nullable=false)
    private String orderdetails;
    // Changed to BigDecimal for accurate representation of prices
  
}
   
//    // @ManyToOne
//    // @JoinColumn(name="gift_id",nullable = false)
//     private Gift gift;

//    // @ManyToOne
//    // @JoinColumn(name="customer",nullable=false)
//      private Customer customer;



// @NoArgsConstructor
// @AllArgsConstructor
// @Getter
// @Setter
// @Entity
// @Table(name = "orders")
// public class Order {
//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     @Column(name = "order_id")
//     private Long orderId;

//     @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
//     private List<Gift> gifts;

//     @Column(name = "total_amount")
//     private Double totalAmount;

//     @Column(name = "quantity")
//     private Integer quantity;

//     // Constructors, getters, and setters
// }