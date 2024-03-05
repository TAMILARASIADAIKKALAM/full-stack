package com.newapp.demo.DTO;

import com.newapp.demo.model.Theme;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class GiftDTO {
    private Long giftid;
    private String giftName;
    private String giftImageUrl;
    private String giftDetails;
    private Double giftPrice;
    

}
