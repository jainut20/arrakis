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
@CrossOrigin
public class BondsController {

    // findAll()
    // findById()
    // findByUserId()
    // findByUserName()  2 step first find user id from username and then security by id.
    @Autowired
    private SecurityRepository securityRepository;

    @PostMapping("/security/add")
    public Security addSecurity(@RequestBody Security security){
        return securityRepository.saveAndFlush(security);
    }

    @PutMapping("/security/update/{id}")
    public ResponseEntity<Security> updateSecurity(@PathVariable(value = "id") Long id,
                                                   @Valid @RequestBody Security securityDetails) throws ResourceNotFoundException {
        Security security = securityRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Security not found for this id :: " + id));

        security.setId(securityDetails.getId());
        security.setIsin(securityDetails.getIsin());
        security.setCusip(securityDetails.getCusip());
        security.setIssuer(securityDetails.getIssuer());
        security.setMaturitydate(securityDetails.getMaturitydate());
        security.setCoupon(securityDetails.getCoupon());
        security.setType(securityDetails.getType());
        security.setFacevalue(securityDetails.getFacevalue());
        security.setStatus(securityDetails.getStatus());

        final Security updatedSecurity = securityRepository.saveAndFlush(security);
        return ResponseEntity.ok(updatedSecurity);
    }

    @DeleteMapping("/security/delete/{id}")
    public Map< String, Boolean > deleteSecurity(@PathVariable(value = "id") Long id)
            throws Exception {
        Security security = securityRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Security not found for this id :: " + id));

        securityRepository.delete(security);
        Map < String, Boolean > response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
    @GetMapping("/security/getall")
    public List <Security> getAllSecurities(){
        return securityRepository.findAll();
    }

    @GetMapping("/security/{id}")
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

    @GetMapping("/security/getbyuserid/{userid}")
    public List<Security> filterByUserId(@PathVariable(value = "userid") Long userid){
        return securityRepository.findByUserId(userid);
    }

    @GetMapping("/security/gettradebyid/{sId}")
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

