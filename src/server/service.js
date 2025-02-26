import axios from "axios";

export const customerMsg = (obj) => {
  return axios.post("http://localhost:5000/api/customer", obj);
};
