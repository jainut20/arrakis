import React, { useState, useEffect } from "react";
import Table from "./TableContainer";
import { SelectColumnFilter } from "./Filter";
import SecurityServices from "../services/SecurityService";
import WatchListServices from "../services/WatchListServices"
import { Button } from "react-bootstrap";
import Notiflix from "notiflix";



function SecTabledata() {
  const [data, setData] = useState([]);

  useEffect(() => {
    SecurityServices.getAllSecurity().then((res) => {
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
    <div style={{ padding: 10 }} className="container" >
      <div className="row">
        <div className="col-sm">
          <center>
            <h4>
              REGISTERED BONDS
            </h4>
          </center>
        </div>
        <div className="col col-md-2">
          <Button className="btn btn-sm">Add New Bond</Button>
        </div>

      </div>

      <Table showAdd="true" handleAdd={(securityid) => { addWL(securityid) }} handleDelete={(data) => { console.log(`delete called on ${data}`) }} columns={columns} data={data} />
    </div>
  );
}

const addWL = (securityid) => {
  Notiflix.Loading.standard();
  WatchListServices.addToWatchList(securityid,
    JSON.parse(localStorage.getItem("user")).id).then(
      (res) => {
        Notiflix.Loading.remove();
        Notiflix.Notify.success("Added to watchlist")
        console.log(res.data)
      }).catch(err => {
        Notiflix.Loading.remove();
        Notiflix.Notify.success("There was some error")
      })
}
export default SecTabledata;