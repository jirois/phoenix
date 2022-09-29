import { useGlobalContext } from "../context";
import axios from "axios";
import { baseUrl } from "../utils/url";

const useRefreshToken = () => {
  const { setAuth } = useGlobalContext();

  const refresh = async () => {
    const { data } = await axios.get(baseUrl + "auth/refresh", {
      withCredentials: true,
    });
    setAuth((prev) => {
      console.log(JSON.stringify(prev));
      console.log(data.accessToken);
      return { ...prev, accessToken: data.accessToken };
    });
    return data.accessToken;
  };

  return refresh;
};

export default useRefreshToken;
