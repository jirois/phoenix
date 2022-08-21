import axios from "axios";
const URL = "https://vast-brook-91178.herokuapp.com/api/v1/auth/";

const register = async (userData) => {
  // const response = await axios.post({
  //   url: URL + "register",
  //   userData,
  //   headers: {
  //     "Access-Control-Allow-Origin": "*",
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  // });

  const response = await axios.post(URL + "register", userData);

  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(URL + "login", userData);

  return response.data;
};

const logout = async () => {
  await axios.delete(URL + "logout");
};
const authService = {
  register,
  login,
  logout,
};

export default authService;
