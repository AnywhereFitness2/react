import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://anywhere-fitness-be.herokuapp.com/api",
    headers: {
      Authorization: token
    }
  });
};
//now
