import axios from "axios";
const URL = "https://upsever.herokuapp.com/api/v1/auth/";

const register = async (userData) => {
  axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
  const response = await axios.post(URL + "register", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(URL + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

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
