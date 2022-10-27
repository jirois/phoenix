import { useGlobalContext } from "../context";
import axios from "axios";
import { baseUrl } from "../utils/url";

const useRefreshToken = () => {
  const { setAuth } = useGlobalContext();

  const refresh = async () => {
    const { response } = await axios.get(baseUrl + "auth/refresh", {
      withCredentials: true,
    });
    setAuth((prev) => {
      console.log(JSON.stringify(prev));
      console.log(response.data.accessToken);
      return { ...prev, accessToken: response.data.accessToken };
    });
    return response.data.accessToken;
  };

  return refresh;
};

export default useRefreshToken;
