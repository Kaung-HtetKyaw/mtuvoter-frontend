import axios from "axios";

export default () => {
  const options = {
    withCredentials: true,
    baseURL: `${process.env.VUE_APP_BASE_API_URL}`,
  };
  const instance = axios.create(options);
  return instance;
};
