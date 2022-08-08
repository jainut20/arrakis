import React from "react";
import { useState, useEffect } from "react";
import SecurityServices from "../services/SecurityService";

const RenderTest = () => {
  const [securities, setSecurities] = useState([]);

  useEffect(() => {
    SecurityServices.getAllSecurity().then(({ data }) => {
      console.log(data);
      setSecurities(data);
    });
  }, []);
  return (
    <>
      {securities.map((security) => (
        <div key={security.id}>
          <div>ID: {security.id}</div>
          <div>Name: {security.isin} </div>
          <div>Age: {security.issuer}</div>
          <br />
        </div>
      ))}
    </>
  );
};

export default RenderTest;
