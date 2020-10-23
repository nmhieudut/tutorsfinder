import jwt_decode from "jwt-decode";

const decodeToken = (token) => {
  var decoded_token = jwt_decode(token);
  return decoded_token;
};
export default decodeToken;
