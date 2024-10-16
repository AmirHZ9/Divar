import api from "../configs/api";


const getUserProfile = () => {
  return api.get("user/whoami").then(res => res || false);
};
const getUserPosts = () =>{
  return api.get("post/my")
}
export { getUserProfile,getUserPosts};
