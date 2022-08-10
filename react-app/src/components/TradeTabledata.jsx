import React, { useState, useEffect } from "react";
import Table from "./TableContainer";
import { SelectColumnFilter } from "./Filter";
import TradeServices from "../services/TradeServices";
import Notiflix from "notiflix";

import { Button } from "react-bootstrap";

function TradeTabledata() {
  const [data, setData] = useState([]);

  useEffect(() => {
    TradeServices.getTrades()
      .then((res) => {
        setData(res.data);
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
      accessor: "buysell",
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
        <div className="col-sm mb-5">
          <center>
            <h4>REGISTERED TRADES</h4>
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

      <Table
        handleDelete={(tradeid) => {
          deleteTrade(tradeid);
        }}
        columns={columns}
        data={data}
      />
    </div>
  );
}

const deleteTrade = (tradeid) => {
  Notiflix.Loading.standard();
  TradeServices.deleteTrade(tradeid).then((res) => {
    window.location.href = "/viewtrades";
    Notiflix.Loading.remove();
  });
};

export default TradeTabledata;
