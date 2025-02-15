package com.db.grad.javaapi.controller;

import com.db.grad.javaapi.exception.ResourceNotFoundException;
import com.db.grad.javaapi.model.Trade;
import com.db.grad.javaapi.model.WatchList;
import com.db.grad.javaapi.repository.WatchListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
public class WatchListController {

    @Autowired
    private WatchListRepository watchListRepository;

    @GetMapping("/watchlist/{userid}")
    public List<WatchList> getList(@PathVariable long userid){
        return watchListRepository.findByUserid(userid);
    }

    @PostMapping("watchlist/add")
    public WatchList create(@RequestBody WatchList watchList){
        return watchListRepository.saveAndFlush(watchList);
    }

    @DeleteMapping("watchlist/delete/{securityid}/{userid}")
    public Map< String, Boolean > deleteWL(@PathVariable(value = "securityid") Long securityid,@PathVariable(value = "userid") Long userid)
            throws Exception {
        WatchList watchList = watchListRepository.findWatchList(securityid,userid);
        watchListRepository.delete(watchList);
        Map < String, Boolean > response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

}
