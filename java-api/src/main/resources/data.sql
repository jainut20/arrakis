INSERT INTO dogs (id, name, age) VALUES (1, 'Einstein', 3);
INSERT INTO dogs (id, name, age) VALUES (2, 'Kaya', 5);
INSERT INTO BOOK (id,bookname) VALUES (1,'TEJAS_BOOK');
INSERT INTO BOOK (id,bookname) VALUES (2,'UTKARSH_BOOK');


INSERT INTO SECURITY (id,isin,cusip,issuer,maturitydate,coupon,type,facevalue,status) VALUES
                     (1,'ABCE342','23EDJHH','RIL','2022-01-02','6.5%','GOVT',1000,'ACTIVE');

INSERT INTO SECURITY (id,isin,cusip,issuer,maturitydate,coupon,type,facevalue,status) VALUES
                     (2,'DY2TYT12','23EDJHH','DB','2020-12-01','3%','PVT',2000,'INACTIVE');


INSERT INTO SECURITY (id,isin,cusip,issuer,maturitydate,coupon,type,facevalue,status) VALUES
                     (3,'DY2TYT12','23EDJHH','CREDIT','2023-08-01','7.5%','PVT',3500.2,'ACTIVE');

INSERT INTO SECURITY (id,isin,cusip,issuer,maturitydate,coupon,type,facevalue,status) VALUES
                     (4,'DFHJH342','23EDJHH','RIL','2024-02-03','5%','GOVT',5421.2,'ACTIVE');

INSERT INTO SECURITY (id,isin,cusip,issuer,maturitydate,coupon,type,facevalue,status) VALUES
                     (5,'FURHF2351','23EDJHH','RIL','2022-01-02','8%','PVT',4435.2,'ACTIVE');

INSERT INTO TRADE (id,bookid,counterpartyid,securityid, quantity, status, price, buysell, tradedate, settlementdate)
            VALUES (2,1,2,3,10,'COMPLETED',40.5,'SELL','2022-07-03','2022-07-04');

INSERT INTO TRADE (id,bookid,counterpartyid,securityid, quantity, status, price, buysell, tradedate, settlementdate)
            VALUES (3,2,2,2,4,'PROCESSING',2000,'BUY','2022-08-09','2022-08-11');

INSERT INTO TRADE (id,bookid,counterpartyid,securityid, quantity, status, price, buysell, tradedate, settlementdate)
            VALUES (4,1,2,4,4,'COMPLETED',1000,'BUY','2022-06-01','2022-06-02');

INSERT INTO TRADE (id,bookid,counterpartyid,securityid, quantity, status, price, buysell, tradedate, settlementdate)
            VALUES (5,2,3,5,3,'COMPLETED',200.5,'BUY','2022-05-11','2022-05-12');
