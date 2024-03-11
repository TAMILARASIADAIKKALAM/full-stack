package com.newapp.demo.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
public class OrderDTO {
    private Long orderId;
    private String ordername;
    private Double orderprice;
    private String orderdetails;
}



// package com.newapp.demo.DTO;
// import java.util.List;

// import lombok.AllArgsConstructor;
// import lombok.Getter;
// import lombok.NoArgsConstructor;
// import lombok.Setter;


// @Getter
// @Setter
// @NoArgsConstructor
// @AllArgsConstructor

// public class OrderDTO {

//     private Long orderId;
//     private List<GiftDTO> gifts;
//     private Double orderPrice;
//     private Double quantity;
    


// }
