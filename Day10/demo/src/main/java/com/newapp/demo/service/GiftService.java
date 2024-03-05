package com.newapp.demo.service;
import java.util.List;
import com.newapp.demo.DTO.GiftDTO;


public interface GiftService 
{
    GiftDTO createGift(GiftDTO us);
    GiftDTO getGiftById(Long userid);
    List<GiftDTO> getAllGift(); 
}
