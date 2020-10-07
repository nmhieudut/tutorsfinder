import jwt_decode from "jwt-decode";

export const useToken = (token) => {
  var decoded_token = jwt_decode(token);
  return decoded_token;
};
