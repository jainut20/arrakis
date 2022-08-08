import axios from "axios";
import { hostNameUrl } from "../config/api";

const baseURL = "http://localhost:8080";

const getTrades = () => {
  return axios.get(`${baseURL}/trade/getall`);
};

const getTradeById = (tradeid) => {
  return axios.get(`${baseURL}/trade/${tradeid}`);
};

const getSecurityByTradeId = (tradeid) => {
  return axios.get(`${baseURL}/securityfromtrade/${tradeid}`);
};

const addTrade = (trade) => {
  return axios.post(`${baseURL}/trade`, {
    trade: trade,
  });
};

const updateTrade = (tradeid, trade) => {
  return axios.post(`${baseURL}/trade/${tradeid}`, {
    trade: trade,
  });
};

const TradeServices = {
  getTrades: getTrades,
  getTradeById: getTradeById,
  getSecurityByTradeId: getSecurityByTradeId,
  addTrade: addTrade,
  updateTrade: updateTrade,
};

export default TradeServices;
