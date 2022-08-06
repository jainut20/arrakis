package com.db.grad.javaapi.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.sql.Date;

@Entity
public class Trade {

    @Id
    private long id;
    private long bookid;
    private long counterpartyid;
    private long securityid;
    private long quantity;
    private String status;
    private double price;
    private String buysell;
    private Date tradedate;
    private Date settlementdate;

    public Trade(){ }
    
    public Trade(long id, long bookid, long counterpartyid, long securityid, long quantity, String status,
            double price, String buysell, Date tradedate, Date settlementdate) {
        this.id = id;
        this.bookid = bookid;
        this.counterpartyid = counterpartyid;
        this.securityid = securityid;
        this.quantity = quantity;
        this.status = status;
        this.price = price;
        this.buysell = buysell;
        this.tradedate = tradedate;
        this.settlementdate = settlementdate;
    }

    
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public long getBookid() {
        return bookid;
    }
    public void setBookid(long bookid) {
        this.bookid = bookid;
    }
    public long getCounterpartyid() {
        return counterpartyid;
    }
    public void setCounterpartyid(long counterpartyid) {
        this.counterpartyid = counterpartyid;
    }
    public long getSecurityid() {
        return securityid;
    }
    public void setSecurityid(long securityid) {
        this.securityid = securityid;
    }
    public long getQuantity() {
        return quantity;
    }
    public void setQuantity(long quantity) {
        this.quantity = quantity;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }
    public double getPrice() {
        return price;
    }
    public void setPrice(double price) {
        this.price = price;
    }
    public String getBuysell() {
        return buysell;
    }
    public void setBuysell(String buysell) {
        this.buysell = buysell;
    }
    public Date getTradedate() {
        return tradedate;
    }
    public void setTradedate(Date tradedate) {
        this.tradedate = tradedate;
    }
    public Date getSettlementdate() {
        return settlementdate;
    }
    public void setSettlementdate(Date settlementdate) {
        this.settlementdate = settlementdate;
    }

}
