import axios from "axios";

export const customerMsg = (obj) => {
  return axios.post("https://mindmed-backend-1.onrender.com/api/customer", obj);
};
