import axios from "axios";
import { hostNameUrl } from "../config/api";

// const baseURL = "http://localhost:8080";
const baseURL = hostNameUrl;

const getWatchListByUserId = (userid) => {
  // returns json array of securities and userid (watchlist)
  return axios.get(`${baseURL}/watchlist/${userid}`);
};

const addToWatchList = (securityid, userid) => {
  // returns json object that was successfully inserted
  return axios.post(`${baseURL}/watchlist/add`, {
    securityid: securityid,
    userid: userid,
  });
};

const removeFromWatchList = (securityid, userid) => {
  return axios.delete(`${baseURL}/watchlist/delete/${securityid}/${userid}`);
};

var WatchListServices = {
  getWatchListByUserId: getWatchListByUserId,
  addToWatchList: addToWatchList,
  removeFromWatchList: removeFromWatchList,
};

export default WatchListServices;
