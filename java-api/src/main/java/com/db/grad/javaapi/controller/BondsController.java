package com.db.grad.javaapi.controller;

import com.db.grad.javaapi.model.Security;
import com.db.grad.javaapi.repository.SecurityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Date;
import java.util.List;

@RestController
public class BondsController {

    // findAll()
    // findById()
    // findByUserId()
    // findByUserName()  2 step first find user id from username and then security by id.
    @Autowired
    private SecurityRepository securityRepository;

    @PostMapping("/security/getbydate")
    public List<Security> filterByDateRange(@RequestBody DateRange dateRange){
        System.out.println(dateRange.getStartDate() + "\n" + dateRange.getEndDate());
        return securityRepository.findByDateRange(dateRange.getStartDate(),dateRange.getEndDate());
    }

}


class DateRange{
    private Date startDate ;
    private Date endDate;

    public DateRange(){};

    public DateRange(Date startDate, Date endDate){
        this.startDate = startDate;
        this.endDate = endDate;
    };

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }
}