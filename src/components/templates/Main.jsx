import { Link } from "react-router-dom";
import { sp } from "../../utils/numbers";

import styles from "../styles/main.module.css"

import Loader from "../modules/Loader";
function Main({data,isLoading}) {
console.log(data)
  if (isLoading) return  <Loader/>;
  return (
    <div className="grid grid-cols-12 gap-5">
      {data?.data.posts.map((item) => (
        <Link to={`/post/${item._id}`} key={item._id} className={`${styles.box} col-span-12 mobilePro:col-span-6 desktopPro:col-span-4 flex justify-between p-5 rounded-lg`}>
          <div className="flex flex-col items-start justify-between">
            {/* <p className="font-bold">{item.options.title}</p> */}
            <div className="text-desk">
              <p className="mb-2">{sp(item.amount)} تومان</p>
              {/* <p>{item.options.city}</p> */}
            </div>
          </div>
          <img
            src={`${import.meta.env.VITE_BASE_URL}${item.images}`}
            alt="img"
            className="w-[150px] h-[130px]"
          />
        </Link>
      ))}
    </div>
  );
}

export default Main;
