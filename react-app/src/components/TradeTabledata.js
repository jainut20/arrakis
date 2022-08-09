import React, { useState, useEffect } from "react";
import Table from "./TableContainer";
import { SelectColumnFilter } from "./Filter";
import TradeServices from "../services/TradeServices";

import { Button } from "react-bootstrap";



function TradeTabledata() {
  const [data, setData] = useState([]);

  useEffect(() => {
    TradeServices.getTrades().then((res)=>{
      setData(res.data)
    }).catch((err) => console.log(err));
    
    console.log(data)
  }, []);

  const columns = [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "Book ID",
      accessor: "bookid",
    },
    {
      Header: "Counterparty ID",
      accessor: "counterpartyid",
    },
    {
      Header: "Security ID",
      accessor: "securityid",
      Cell: ({ cell: { value } }) => value || "-",
    },
    {
      Header: "Quantity",
      accessor: "quantity",
      
    },
    {
      Header: "Status",
      accessor: "status",
      Filter: SelectColumnFilter,
      // disable the filter for particular column
      
      Cell: ({ cell: { value } }) => value || "-",
    },
    {
      Header: "Price",
      accessor: "price",
      
    },
    {
      Header: "Buy_Sell",
      accessor: "buy_sell",
      Filter: SelectColumnFilter,
    },
    {
      Header: "Trade Date",
      accessor: "tradedate",
      
      
    },
    {
      Header: "Settlement Date",
      accessor: "settlementdate",
        
        
    },
    {
      Header: "Action",
      accessor: "action" 
    }
  ];

  return (
    <div style={{padding:10}} className="container" >
      <div className="row">
    <div className="col-sm">
      <center>
    <h4>
        Registered Trades
      </h4>
      </center>
    </div>
    <div className="col col-lg-1">
        
      <Button onClick={()=>{window.location.href = "/addtrade"}}>Add</Button>
    </div>
    
  </div>
      
      <Table deleteHandler={()=>{console.log("delete called")}} columns={columns} data={[<button>Hey</button>]} />
      </div>
      
  );
}

export default TradeTabledata;