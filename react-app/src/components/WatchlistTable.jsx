import React, { useState, useEffect } from "react";
import Table from "./TableContainer";
import { SelectColumnFilter } from "./Filter";
import SecurityServices from "../services/SecurityService";

import { Button } from "react-bootstrap";
import WatchListServices from "../services/WatchListServices";

function TradeTabledata() {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem("user")).id);
    WatchListServices.getWatchListByUserId(
      JSON.parse(localStorage.getItem("user")).id
    )
      .then((res) => {
        let watch = [];
        SecurityServices.getAllSecurity().then((res1) => {
          res.data.forEach((el) => {
            let f = res1.data.find((e) => e.id === el.securityid);
            watch.push(f);
          });
          watch = watch.filter((x) => x !== undefined);
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
      filter: "includes",
    },
  ];

  return (
    <div style={{ padding: 10 }} className="container">
      <div className="row">
        <div className="col-sm mb-5">
          <center>
            <h4>BONDS WATCHLIST</h4>
          </center>
        </div>
      </div>

      <Table
        handleDelete={(securityid) => {
          deleteFromWatchList(securityid);
        }}
        columns={columns}
        data={data}
      />
    </div>
  );
}

const deleteFromWatchList = (securityid) => {
  let userid = JSON.parse(localStorage.getItem("user")).id;
  WatchListServices.removeFromWatchList(securityid, userid).then((res) => {
    window.location.href = "/watchlist";
  });
};

export default TradeTabledata;
