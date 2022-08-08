package com.db.grad.javaapi.controller;

import com.db.grad.javaapi.exception.ResourceNotFoundException;
import com.db.grad.javaapi.model.Security;
import com.db.grad.javaapi.model.Trade;
import com.db.grad.javaapi.repository.SecurityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.sql.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class BondsController {

    // findAll()
    // findById()
    // findByUserId()
    // findByUserName()  2 step first find user id from username and then security by id.
    @Autowired
    private SecurityRepository securityRepository;

    @PostMapping("/addSecurity")
    public Security addSecurity(@RequestBody Security security){
        return securityRepository.saveAndFlush(security);
    }

    @PutMapping("/updateSecurity/{id}")
    public ResponseEntity<Security> updateSecurity(@PathVariable(value = "id") Long id,
                                                   @Valid @RequestBody Security securityDetails) throws ResourceNotFoundException {
        Security getSecurity = securityRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Security not found for this id :: " + id));

        getSecurity.setStatus(securityDetails.getStatus());

        final Security updatedSecurity = securityRepository.saveAndFlush(getSecurity);
        return ResponseEntity.ok(updatedSecurity);
    }

    @DeleteMapping("/deleteSecurity/{id}")
    public Map< String, Boolean > deleteSecurity(@PathVariable(value = "id") Long id)
            throws Exception {
        Security security = securityRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Security not found for this id :: " + id));

        securityRepository.delete(security);
        Map < String, Boolean > response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
    @GetMapping("/getSecurities")
    public List <Security> getAllSecurities(){
        return securityRepository.findAll();
    }

    @GetMapping("/getSecurity/{id}")
    public ResponseEntity < Security > getSecurityById(@PathVariable(value = "id") Long id)
            throws ResourceNotFoundException {
        Security security = securityRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Security not found for this id :: " + id));
        return ResponseEntity.ok().body(security);
    }

    @PostMapping("/security/getByDate")
    public List<Security> filterByDateRange(@RequestBody DateRange dateRange){
        System.out.println(dateRange.getStartDate() + "\n" + dateRange.getEndDate());
        return securityRepository.findByDateRange(dateRange.getStartDate(),dateRange.getEndDate());
    }

    @PostMapping("/getSecurityByUserId/{userid}")
    public List<Security> filterByUserId(@PathVariable(value = "userid") Long userid){
        return securityRepository.findByUserId(userid);
    }

    @PostMapping("/getTradeById/{sId}")
    public List<Trade> tradeById(@PathVariable(value = "sId") Long sId){
        return securityRepository.findTradeBySecurityId(sId);
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

