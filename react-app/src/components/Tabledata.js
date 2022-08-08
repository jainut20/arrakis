import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "./TableContainer";
import { SelectColumnFilter } from "./Filter";
import SecurityServices from "../services/SecurityService";
import { Button } from "react-bootstrap";



function Tabledata() {
  const [data, setData] = useState([]);

  useEffect(() => {
    SecurityServices.getAllSecurity().then((res)=>{
      setData(res.data)
    }).catch((err) => console.log(err));
    // axios("http://api.tvmaze.com/search/shows?q=girls")
    //   .then((res) => {
    //     setData(res.data);
    //   })
    //   .catch((err) => console.log(err));
  }, []);

  const columns = [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "ISIN",
      accessor: "isin",
    },
    {
      Header: "CUSIP",
      accessor: "cusip",
    },
    {
      Header: "Issuer",
      accessor: "issuer",
      Cell: ({ cell: { value } }) => value || "-",
    },
    {
      Header: "Maturity Date",
      accessor: "maturitydate",
      
    },
    {
      Header: "Coupon",
      accessor: "coupon",
      // disable the filter for particular column
      
      Cell: ({ cell: { value } }) => value || "-",
    },
    {
      Header: "Type",
      accessor: "type",
      Filter: SelectColumnFilter,
    },
    {
      Header: "Face Value",
      accessor: "facevalue",
    },
    {
      Header: "Status",
      accessor: "status",
      Filter: SelectColumnFilter,
      filter: "includes"
      
    },
    
  ];

  return (
    <div style={{padding:80}} class="container" >
      <div class="row">
    <div class="col-sm">
    <h4>
        Registered Bonds
      </h4>
    </div>
    <div class="col col-lg-1">
      <Button>ADD</Button>
    </div>
    
  </div>
      
      <Table columns={columns} data={data} />
    </div>
  );
}

export default Tabledata;