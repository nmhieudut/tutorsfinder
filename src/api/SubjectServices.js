import axios from "axios";

async function getSubjects() {
  const token = JSON.parse(localStorage.getItem("token"));
  try {
    const response = await axios.get(
      "http://haimai.ddns.net:9090/api/edu/v1/subject",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("res", response);
    return response;
  } catch (e) {
    console.log("error", e);
  }
}
export default { getSubjects };
