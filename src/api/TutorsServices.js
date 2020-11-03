import axios from "axios";

export const getAllTutors = async () => {
  const token = JSON.parse(localStorage.getItem("token"));
  try {
    const response = await axios.get(
      "http://haimai.ddns.net:9090/api/edu/v1/tutor",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
export default {
  getAllTutors,
};
