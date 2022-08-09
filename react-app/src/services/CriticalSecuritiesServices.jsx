import React from "react";
import { useState, useEffect } from "react";
import SecurityServices from "./SecurityService";

const CriticalSecuritiesServices = () => {
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
      {criticalSecurities.map((security) => (
        <div key={security.id}>
          <div>ID: {security.id}</div>
          <div>Name: {security.isin} </div>
          <div>Age: {security.issuer}</div>
          <div>Maturity Date: {security.maturitydate}</div>
          <div>Status: {security.status}</div>
          <br />
        </div>
      ))}
    </>
  );
};

export default CriticalSecuritiesServices;
