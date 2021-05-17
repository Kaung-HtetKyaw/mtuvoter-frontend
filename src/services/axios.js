import axios from "axios";
console.log(process.env.VUE_APP_BASE_API_URL);
export default isForm => {
  const options = {
    withCredentials: true,
    baseURL: process.env.VUE_APP_BASE_API_URL
  };
  if (isForm) {
    options.headers = {
      "Content-Type": "application/x-www-form-urlencoded"
    };
  }
  const instance = axios.create(options);

  return instance;
};
