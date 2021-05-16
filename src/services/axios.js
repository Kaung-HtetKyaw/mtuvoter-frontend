import axios from "axios";
export default (isForm) => {
  const options = {
    withCredentials: true,
    baseURL: `https://practical-mestorf-eaedc4.netlify.app`,
  };
  if (isForm) {
    options.headers = {
      "Content-Type": "application/x-www-form-urlencoded",
    };
  }
  const instance = axios.create(options);

  return instance;
};
