import axios from "axios";
import cookies from 'js-cookie';
import { API_BASE_URL, TOKEN_NAME } from "../constants";

export const service = axios.create({
  baseURL: API_BASE_URL,
  headers: cookies.get('myToken') ? { Authorization: `Token ${cookies.get(TOKEN_NAME)}` } : {},
})