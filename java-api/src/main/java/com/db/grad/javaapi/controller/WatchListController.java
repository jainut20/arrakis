package com.db.grad.javaapi.controller;

import com.db.grad.javaapi.model.WatchList;
import com.db.grad.javaapi.repository.WatchListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class WatchListController {

    @Autowired
    private WatchListRepository watchListRepository;

    @GetMapping("/watchlist/{userid}")
    public List<WatchList> getList(@RequestBody WatchList watchList){
        return watchListRepository.findByUserid(watchList.getUserid());
    }

    @PostMapping("watchlist/add")
    public WatchList create(@RequestBody WatchList watchList){
        return watchListRepository.saveAndFlush(watchList);
    }

    @PostMapping("watchlist/remove")
    public String remove(@RequestBody WatchList watchList){
        try {
            watchListRepository.delete(watchList);
            return "OK";
        } catch (Exception E){
            return E.getMessage();
        }
    }

}
