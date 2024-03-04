package com.newapp.demo.mapper;

import com.newapp.demo.DTO.GiftDTO;
import com.newapp.demo.model.Gift;

public class GiftMapper {
  public static GiftDTO maptoGiftDto(Gift gift) 
  {
      
        GiftDTO giftDTO=new GiftDTO();
        giftDTO.setGiftName(giftDTO.getGiftName()); 
        giftDTO.setGiftImageUrl(giftDTO.getGiftImageUrl());
        giftDTO.setGiftDetails(giftDTO.getGiftDetails());
        giftDTO.setGiftPrice(giftDTO.getGiftPrice());
        giftDTO.setThemes(giftDTO.getThemes());
        return giftDTO;

    }

  public static Gift maptoGift(GiftDTO giftto) 
  {
    Gift gift=new Gift();
    gift.setGiftname(gift.getGiftname()); 
    gift.setGiftImageUrl(gift.getGiftImageUrl());
    gift.setGiftDetails(gift.getGiftDetails());
    gift.setGiftPrice(gift.getGiftPrice());
    gift.setThemes(gift.getThemes());
    return gift;

  }

}