import axios from "axios";
const baseurl = import.meta.env.VITE_API_BASE_URL;


export const fetchServices = async () => await axios.get(`${baseurl}/services`);
export const signup = async () => await axios.post(`${baseurl}/auth/signup`);