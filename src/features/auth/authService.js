import axios from "axios";
import { baseUrl } from "../../utils/url";
const URL = baseUrl;

const register = async (userData) => {
  const response = await axios.post(URL + "auth/register", userData);

  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(URL + "auth/login", userData);

  return response.data;
};

const verifyEmail = async (queryData) => {
  const { data } = await axios.post(URL + "auth/verify-email", queryData);
  return data;
};

const forgotPassword = async (userData) => {
  const { data } = await axios.post(URL + "auth/forgot-password", userData);
  return data;
};

const logout = async () => {
  await axios.delete(URL + "auth/logout");
};
const authService = {
  register,
  login,
  logout,
  verifyEmail,
  forgotPassword,
};

export default authService;
