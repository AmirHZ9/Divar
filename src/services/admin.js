import api from "../configs/api";

const createCategory = (data) => {
  api.post("category", data);
};

export { createCategory };
