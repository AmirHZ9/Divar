import api from "../configs/api";

const createCategory = (data) => api.post("category", data);

const getAllCategory = () => {
  return api.get("category");
};
const deleteCategory = (id) =>{
    return api.delete(`category/${id}`)
}
export { createCategory, getAllCategory,deleteCategory };
