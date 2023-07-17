import axios from "axios";
import axiosInstance from "../utils/axios";

export const getApartmentsList = () => {
  return axiosInstance.get("/apartments");
};

export const getApartmentsById = (id) => {
  return axiosInstance.get(`/apartments/${id}`);
};
