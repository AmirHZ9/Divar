import api from "../configs/api";

const getUserProfile = () => {
  return api.get("user/whoami").then((res) => res || false);
};
const getUserPosts = () => {
  return api.get("post/my");
};
const deleteUserPost = (id)=>{
  return api.delete(`post/delete/${id}`)
}
const getAllPosts = () => {
  return api.get("");
};
export { getUserProfile, getUserPosts, getAllPosts,deleteUserPost };
