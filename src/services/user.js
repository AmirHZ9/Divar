import api from "../configs/api";


const getUserProfile = () => {
  return api.get("user/whoami").then(res => res || false);
};

export default getUserProfile;
