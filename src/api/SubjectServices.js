import axios from "axios";

function getSubjects() {
  const token = JSON.parse(localStorage.getItem("token"));
  return new Promise((resolve, reject) => {
    axios
      .get("http://haimai.ddns.net:9090/api/edu/v1/subject", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
}
export default { getSubjects };
