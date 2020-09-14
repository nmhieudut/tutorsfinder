import axios from "axios";

function login(username, password) {
  const userConfig = {
    username: username,
    password: password,
  };
  return new Promise((resolve, reject) => {
    axios
      .post("http://haimai.ddns.net:9090/api/auth/v1/user/login", userConfig)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", JSON.stringify(res.data.authToken));
        resolve(res);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
}
export default {
  login,
};
