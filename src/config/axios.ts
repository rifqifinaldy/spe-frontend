import axios from "axios";

export const BASE_URL = "https://spe-academy.spesolution.com/api";

export const REQUEST = axios.create({
  //   baseURL: process.env["REACT_BASE_BASE_URL"],
  baseURL: BASE_URL,
  headers: {
    Authorization: "Bearer o7Ytbt9XQLI3PgtebJfKSXKEf0XHU74Y",
    "Content-Type": "application/json",
  },
});
