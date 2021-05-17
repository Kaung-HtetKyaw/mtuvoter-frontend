import axios from "axios";
export default isForm => {
  const options = {
    withCredentials: true,
    baseURL: 'https://kgnatours.herokuapp.com/api/v1'
  };
  if (isForm) {
    options.headers = {
      "Content-Type": "application/x-www-form-urlencoded"
    };
  }
  const instance = axios.create(options);
  return instance;
};
