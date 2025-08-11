import axios from "axios";
import React from "react";

const instance = axios.create({
  baseURL: "https://portfolio-server-kappa-eight.vercel.app",
});

const useAxiosPublic = () => {
  return instance;
};

export default useAxiosPublic;
