import { getAllCategory } from "../../services/admin";
import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../../services/user";
import { sp } from "../../utils/numbers";
import styles from "../styles/main.module.css"
function Main() {
  const { data, isLoading } = useQuery(["All-Posts"], getAllPosts);
  console.log(data);
  if (isLoading) return <h3>LOADING</h3>;
  return (
    <div className="grid grid-cols-12 gap-5">
      {data?.data.posts.map((item) => (
        <div className={`${styles.box} col-span-4 flex justify-between p-5 rounded-lg`}>
          <div className="flex flex-col items-start justify-between">
            <p className="font-bold">{item.options.title}</p>
            <div className="text-desk">
              <p className="mb-2">{sp(item.amount)} تومان</p>
              <p>{item.options.city}</p>
            </div>
          </div>
          <img
            src={`${import.meta.env.VITE_BASE_URL}${item.images}`}
            alt="img"
            className="w-[150px] h-[130px]"
          />
        </div>
      ))}
    </div>
  );
}

export default Main;
