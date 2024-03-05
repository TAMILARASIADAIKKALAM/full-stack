package com.newapp.demo.service.Impl;



import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.newapp.demo.DTO.GiftDTO;
import com.newapp.demo.mapper.GiftMapper;
import com.newapp.demo.model.Gift;
import com.newapp.demo.repo.GiftRepo;
import com.newapp.demo.service.GiftService;
import com.newapp.demo.exception.ResourceNotFoundException;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor


public class GiftImpl implements GiftService
{
    private GiftRepo giftRepo;

    @Override
    public GiftDTO createGift(GiftDTO u)
    {
        Gift r=GiftMapper.maptoGift(u);
        Gift saved=giftRepo.save(r);
        return GiftMapper.maptoGiftDto(saved);
    }

    @Override
    public GiftDTO getGiftById(Long giftid)
    {
       Gift u=giftRepo.findById(giftid).orElseThrow(()->new ResourceNotFoundException("User is not exist with given id:"+giftid));
       return GiftMapper.maptoGiftDto(u);
    }

    @Override
    public List<GiftDTO> getAllGift()
    {
       List<Gift> li=giftRepo.findAll();
       List<GiftDTO> lis=new ArrayList<>();
       for(Gift u:li)
       {
         lis.add(GiftMapper.maptoGiftDto(u));
       }
       return lis;
    }
}

