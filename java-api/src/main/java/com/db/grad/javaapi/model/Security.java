package com.db.grad.javaapi.model;


import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Security {

    @Id
    private long id;
    private String isin;
    private String cusip;
    private String issuer;
    private Date maturitydate;
    private String coupon;
    private String type;
    private long facevalue;
    private String status;

    public Security(){}

    public Security(long id, String isin, String cusip, String issuer, Date maturitydate, String coupon, String type,
            long facevalue, String status) {
        this.id = id;
        this.isin = isin;
        this.cusip = cusip;
        this.issuer = issuer;
        this.maturitydate = maturitydate;
        this.coupon = coupon;
        this.type = type;
        this.facevalue = facevalue;
        this.status = status;
    }
    
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getIsin() {
        return isin;
    }
    public void setIsin(String isin) {
        this.isin = isin;
    }
    public String getCusip() {
        return cusip;
    }
    public void setCusip(String cusip) {
        this.cusip = cusip;
    }
    public String getIssuer() {
        return issuer;
    }
    public void setIssuer(String issuer) {
        this.issuer = issuer;
    }
    public Date getMaturitydate() {
        return maturitydate;
    }
    public void setMaturitydate(Date maturitydate) {
        this.maturitydate = maturitydate;
    }
    public String getCoupon() {
        return coupon;
    }
    public void setCoupon(String coupon) {
        this.coupon = coupon;
    }
    public String getType() {
        return type;
    }
    public void setType(String type) {
        this.type = type;
    }
    public long getFacevalue() {
        return facevalue;
    }
    public void setFacevalue(long facevalue) {
        this.facevalue = facevalue;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }



    
}
