import { useState } from "react";
import styles from "../styles/adminPage.module.css";
import { createCategory } from "../services/admin";
import { useMutation } from "@tanstack/react-query";
function AdminPage() {
  const [form, setForm] = useState({ name: "", slug: "", icon: "" });
  const { mutate, isLoading, error, data } = useMutation(createCategory);
  console.log({ isLoading, error, data });
  const submitHandler = (e) => {
    e.preventDefault();
    if (!form.name || !form.slug || !form.icon) return;
mutate(form);

  };
  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };
  return (
    <form onChange={changeHandler} onSubmit={submitHandler}>
      <h2>دسته بندی جدید</h2>
      <div className="flex flex-col w-fit">
        <label htmlFor="category">اسم دسته بندی</label>
        <input
          className={styles.adminInput}
          type="text"
          id="category"
          name="name"
        />
        <label htmlFor="slug">اسلاگ</label>
        <input
          className={styles.adminInput}
          type="text"
          id="slug"
          name="slug"
        />
        <label htmlFor="icon">ایکون</label>
        <input
          className={styles.adminInput}
          type="text"
          id="icon"
          name="icon"
        />
      </div>
      <button type="submit">ایجاد</button>
    </form>
  );
}

export default AdminPage;
