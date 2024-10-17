import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getAllCategory } from "../../services/admin";

function SideBar() {
  const { data, isLoading, error } = useQuery(["category"], getAllCategory);
  console.log({ data });
  if (isLoading) return <h3>Loading</h3>;
  return (
    <div>
        <h1 className="font-bold text-title">لیست دسته بندی ها</h1>
      {data?.data.map((item) => (
        <div className="cursor-pointer">
          <h4 className="my-5">{item.name}</h4>
        </div>
      ))}
    </div>
  );
}

export default SideBar;
