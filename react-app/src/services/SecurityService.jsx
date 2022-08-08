import axios from "axios";
import { hostNameUrl } from "../config/api";

const baseURL = "http://localhost:8080";

const addSecurity = (security) => {
  return axios.post(`${baseURL}/security/add`, security);
};

const updateSecurity = (securityid, security) => {
  return axios.put(`${baseURL}/security/update/${securityid}`, security);
};

const deleteSecurity = (securityid) => {
  return axios.delete(`${baseURL}/security/delete/${securityid}`);
};

const getAllSecurity = () => {
  return axios.get(`${baseURL}/security/getall`);
};

const getSecurityById = (securityid) => {
  return axios.get(`${baseURL}/security/${securityid}`);
};

const getSecurityByDateRange = (startdate, enddate) => {
  return axios.post(`${baseURL}/security/getByDate`, {
    startDate: startdate,
    endDate: enddate,
  });
};

const getSecurityByUserId = (userid) => {
  return axios.get(`${baseURL}/security/getbyuserid/${userid}`);
};

const getTradeBySecurityId = (securityid) => {
  return axios.get(`${baseURL}/security/gettradebyid/${securityid}`);
};

const SecurityServices = {
  addSecurity: addSecurity,
  updateSecurity: updateSecurity,
  deleteSecurity: deleteSecurity,
  getAllSecurity: getAllSecurity,
  getSecurityById: getSecurityById,
  getSecurityByDateRange: getSecurityByDateRange,
  getSecurityByUserId: getSecurityByUserId,
  getTradeBySecurityId: getTradeBySecurityId,
};

export default SecurityServices;
