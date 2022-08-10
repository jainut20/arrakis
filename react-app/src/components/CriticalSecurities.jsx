import React from "react";
import { useState, useEffect } from "react";
import SecurityServices from "../services/SecurityService";

const CriticalSecurities = () => {
  const [criticalSecurities, setCriticalSecurities] = useState([]);

  useEffect(() => {
    SecurityServices.getAllSecurity()
      .then(({ data }) => {
        let dateToday = new Date();
        return data.filter(
          (security) =>
            new Date(security.maturitydate) < dateToday &&
            security.status === "ACTIVE"
        );
      })
      .then((critical) => setCriticalSecurities(critical));
  }, []);
  return (
    <>
      {/* {criticalSecurities.map((security) => (
        <div key={security.id}>
          <div>ID: {security.id}</div>
          <div>Name: {security.isin} </div>
          <div>Age: {security.issuer}</div>
          <div>Maturity Date: {security.maturitydate}</div>
          <div>Status: {security.status}</div>
          <br />
        </div>
      ))} */}
      <div className="container">
        <div className="col-sm mb-5">
          <center>
            <h4>Critical Bonds</h4>
          </center>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>ISON</th>
              <th>CUSIP</th>
              <th>Issuer</th>
              <th>Maturity Date</th>
              <th>Coupon</th>
              <th>Type</th>
              <th>Face Value</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {criticalSecurities.map((security) => (
              <tr key={security.id}>
                <td>{security.id}</td>
                <td>{security.isin}</td>
                <td>{security.cusip}</td>
                <td>{security.issuer}</td>
                <td>{security.maturitydate}</td>
                <td>{security.coupon}</td>
                <td>{security.type}</td>
                <td>{security.facevalue}</td>
                <td>{security.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CriticalSecurities;
