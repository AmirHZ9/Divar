import { useState } from "react";
import styles from "../styles/adminPage.module.css";
import { createCategory } from "../services/admin";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import AllCategoryAdmin from "../components/templates/AllCategoryAdmin";
function AdminPage() {
  const queryClient = useQueryClient();
  const [form, setForm] = useState({ name: "", slug: "", icon: "" });
  const { mutate, isLoading, error, data } = useMutation(createCategory, {
    onSuccess: () =>{ queryClient.invalidateQueries("category");
    setForm({ name: "", slug: "", icon: "" });}

  });

  const submitHandler = (e) => {
    e.preventDefault();
    if (!form.name || !form.slug || !form.icon) return;

    mutate(form);

  };
  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });  
  };

  return (
    <div className="container mx-auto">
      <AllCategoryAdmin />
      {data?.data && (
        <p className="w-full bg-base text-white text-center rounded-md p-3">
          دسته بندی جدید با موفقیت شد
        </p>
      )}
      <form  onSubmit={submitHandler}>
        <h2 className="font-bold border-base border-b-2 border-solid w-fit mt-10">
          دسته بندی جدید
        </h2>
        <div className="flex flex-col w-fit">
          <label htmlFor="category" className="font-semibold mt-5 mb-2">
            اسم دسته بندی
          </label>
          <input
            className={styles.adminInput}
            type="text"
            id="category"
            name="name"
            onChange={changeHandler}
            value={form.name}
          />
          <label htmlFor="slug" className="font-semibold mt-5 mb-2">
            اسلاگ
          </label>
          <input
            className={styles.adminInput}
            type="text"
            id="slug"
            name="slug"
            onChange={changeHandler}
            value={form.slug}
          />
          <label htmlFor="icon" className="font-semibold mt-5 mb-2">
            ایکون
          </label>
          <input
            className={styles.adminInput}
            type="text"
            id="icon"
            name="icon"
            onChange={changeHandler}
            value={form.icon}
          />
        </div>
        <button
          type="submit"
          className="bg-base px-5 py-2 my-5 text-white rounded-lg"
        >
          ایجاد
        </button>
      </form>
    </div>
  );
}

export default AdminPage;
