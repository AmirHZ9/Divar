import { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { getAllCategory } from "../../services/admin";
import { getCookie } from "../../utils/cookie";

function AddPost() {
  const { data } = useQuery(["category"], getAllCategory);
  const [form, setForm] = useState({
    title: "",
    content: "",
    amount: "",
    category: null,
    images: null,
  });

  const changeHandler = (e) => {
    const name = e.target.name;

    if (name !== "images") {
      setForm({ ...form, [name]: e.target.value });
    } else {
      setForm({ ...form, [name]: e.target.files[0] });
    }
  };
  const addHandler = (e) => {
    e.preventDefault();
    if (
      !form.amount |
      !form.category |
      !form.content |
      !form.images |
      !form.title
    )
      return;
    const token = getCookie("accessToken");
    const formData = new FormData();
    for (let i in form) {
      formData.append(i, form[i]);
    }

    axios
      .post(`${import.meta.env.VITE_BASE_URL}post/create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => 
        toast.success(res.data.message),
      setForm({
        title: "",
        content: "",
        amount: "",
        category: null,
        images: null,
      })
    )
      .catch(toast.error("مشکلی پیش امده"));
  };
  return (
    <div>
      <form
        onSubmit={addHandler}
        onChange={changeHandler}
        className="container mx-auto flex flex-col"
      >
        <h3 className="text-titleX font-bold mb-5">افزودن اگهی</h3>
        <label htmlFor="title" className="font-semibold text-title mb-5">
          عنوان اگهی
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="border rounded-md w-fit p-2 mb-5"
        />
        <label htmlFor="content" className="font-semibold text-title mb-5">
          توضیحات
        </label>
        <textarea
          type="text"
          id="content"
          name="content"
          className="border rounded-md w-fit p-2 mb-5"
        />
        <label htmlFor="amount" className="font-semibold text-title mb-5">
          {" "}
          قیمت
        </label>
        <input
          type="number"
          id="amount"
          name="amount"
          className="border rounded-md w-fit p-2 mb-5"
        />
        <label htmlFor="city" className="font-semibold text-title mb-5">
          شهر
        </label>
        <input
          type="text"
          id="city"
          name="city"
          className="border rounded-md w-fit p-2 mb-5"
        />
        <label htmlFor="category" className="font-semibold text-title mb-5">
          دسته بندی
        </label>
        <select
          name="category"
          id="category"
          className="border rounded-md w-fit p-2 mb-5"
        >
          {data?.data.map((item) => (
            <option key={item._id} value={item._id}>
              {item.name}
            </option>
          ))}
        </select>
        <label htmlFor="images" className="font-semibold text-title mb-5">
          عکس
        </label>
        <input type="file" id="images" name="images" />
        <button
          type="submit"
          className="bg-base rounded-md px-4 py-2 w-fit text-white my-5"
        >
          ایجاد
        </button>
      </form>
      

    </div>
  );
}

export default AddPost;
