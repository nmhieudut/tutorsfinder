import axios from "axios";

const pushNotifications = async (notification) => {
  const token = JSON.parse(localStorage.getItem("token"));
  try {
    const response = await axios.post(
      "http://14.245.68.58:9090/api/edu/v1/push-notification",
      {
        notification: notification,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (e) {
    console.log(e);
  }
};
export default {
  pushNotifications,
};
