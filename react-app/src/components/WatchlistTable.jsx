import React, { useState, useEffect } from "react";
import Table from "./TableContainer";
import { SelectColumnFilter } from "./Filter";
import TradeServices from "../services/TradeServices";
import SecurityServices from "../services/SecurityService";

import { Button } from "react-bootstrap";
import WatchListServices from "../services/WatchListServices";

function TradeTabledata() {
  const [data, setData] = useState([]);

  useEffect(() => {
    WatchListServices.getWatchListByUserId(
      JSON.parse(localStorage.getItem("user")).id
    )
      .then((res) => {
        let watch = [];
        SecurityServices.getAllSecurity().then((res1) => {
          res.data.forEach((el) => {
            watch.push(res1.data.find((e) => e.id === el.securityid));
            console.log(watch);
          });
          console.log(watch);
          setData(watch);
        });
      })
      .catch((err) => console.log(err));

    console.log(data);
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
  ];

  return (
    <div style={{ padding: 10 }} className="container">
      <div className="row">
        <div className="col-sm">
          <center>
            <h4>BONDS WATCHLIST</h4>
          </center>
        </div>
        <div className="col col-lg-1">
          <Button
            onClick={() => {
              window.location.href = "/addtrade";
            }}
          >
            Add
          </Button>
        </div>
      </div>

      <Table columns={columns} data={data} />
    </div>
  );
}

export default TradeTabledata;
