package com.db.grad.javaapi.model;


import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "security")
public class Security {

    @Id
    private long id;
    private String isin;
    private String cusip;
    private String issuer;
    private Date maturitydate; 
    private String coupon;
    private String type;
    private double facevalue;
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

    @Id
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }

    @Column(name = "isin", nullable = false)
    public String getIsin() {
        return isin;
    }
    public void setIsin(String isin) {
        this.isin = isin;
    }

    @Column(name = "cusip", nullable = false)
    public String getCusip() {
        return cusip;
    }
    public void setCusip(String cusip) {
        this.cusip = cusip;
    }

    @Column(name = "issuer", nullable = false)
    public String getIssuer() {
        return issuer;
    }
    public void setIssuer(String issuer) {
        this.issuer = issuer;
    }

    @Column(name = "maturitydate", nullable = false)
    public Date getMaturitydate() {
        return maturitydate;
    }
    public void setMaturitydate(Date maturitydate) {
        this.maturitydate = maturitydate;
    }

    @Column(name = "coupon", nullable = false)
    public String getCoupon() {
        return coupon;
    }
    public void setCoupon(String coupon) {
        this.coupon = coupon;
    }

    @Column(name = "type", nullable = false)
    public String getType() {
        return type;
    }
    public void setType(String type) {
        this.type = type;
    }

    @Column(name = "facevalue", nullable = false)
    public double getFacevalue() {
        return facevalue;
    }
    public void setFacevalue(double facevalue) {
        this.facevalue = facevalue;
    }

    @Column(name = "status", nullable = false)
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }



    
}
