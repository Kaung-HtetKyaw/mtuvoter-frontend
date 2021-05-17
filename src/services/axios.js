import axios from "axios";
console.log(process.env.VUE_APP_BASE_API_URL);
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
  console.log(options)
  return instance;
};
