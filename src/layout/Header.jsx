import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import styles from "./Header.module.css";

import divar from "../public/divar.svg";
import loc from "../public/location.svg";
import profile from "../public/profile.svg";
import { getUserProfile } from "../services/user";
import { TiThMenu } from "react-icons/ti";
import ResponsiveHeader from "./ResponsiveHeader";

function Header() {
  const [show, setShow] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  const { data } = useQuery(["profile"], getUserProfile);
  const myDivarOptions = [
    { id: 1, name: "ورود", path: "authPage" },
    { id: 2, name: "نشان ها", path: "" },
    { id: 3, name: "یادداشت ها", path: "" },
    { id: 4, name: "بازدیدهای اخیر", path: "" },
    { id: 5, name: "مقابله با مزاحمت و کلاهبرداری", path: "" },
    { id: 6, name: "تنظیمات ظاهر دیوار", path: "" },
    { id: 7, name: "دیوار برای کسب و کارها", path: "" },
    { id: 8, name: "خروج", path: "" },
  ];

  const clickHandler = (e) => {
    console.log(e.target.name);
    if (e.target.name == "خروج") {
      Cookies.remove("accessToken");
      Cookies.remove("refreshToken");
      window.location.reload();
    }
  };
  return (
    <>
      <div className={` w-full  ${styles.header}`}>
        <div className="container mx-auto flex items-center justify-between py-5 mb-5">
          <div className="flex items-center">
            <Link to="/">
              <img src={divar} alt="divar" className="w-12 ml-10" />
            </Link>
            <div className="mini:flex items-center hidden">
              <img src={loc} alt="loc" className="ml-2" />
              <span>تهران</span>

             
            </div>
          </div>
          <div className="flex items-center mobilePro:hidden">   
                 <div className="relative z-20">
              <div
                className={`${
                  show && "bg-gray2"
                } flex items-center cursor-pointer px-4 py-2 rounded-lg  duration-300`}
                onClick={() => setShow(!show)}
              >
                <img src={profile} alt="" className="ml-2" />
                <span>دیوار من</span>
              </div>
              {show ? (
                <div className={styles.list}>
                  {myDivarOptions.map((item) => {
                    return item.id == 8 && !data ? (
                      ""
                    ) : item.id == 1 && data ? (
                      ""
                    ) : (
                      <Link
                        to={`/${item.path}`}
                        key={item.id}
                        onClick={clickHandler}
                        name={item.name}
                        className={` ${styles.myDivarOptions}`}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              ) : (
                ""
              )}
            </div>
             <button
                className="mobilePro:hidden w-10 h-10 flex justify-center items-center "
                onClick={() => setShowSideBar(!showSideBar)}
              >
                <TiThMenu size={25} className="text-base" />
              </button>
              
              <div className={`${showSideBar ? "block" : "hidden"}`}>
                <ResponsiveHeader
                  data={data}
                  showSideBar={showSideBar}
                  setShowSideBar={setShowSideBar}
                />
              </div>
          </div>
          <div className="  hidden mobilePro:flex items-center ">
            {data?.data?.role == "ADMIN" && (
              <Link
                to="/adminPage"
                className="text-base border border-base border-solid px-4 py-2 rounded-lg"
              >
                پنل ادمین
              </Link>
            )}
            <div className="relative z-20">
              <div
                className={`${
                  show && "bg-gray2"
                } flex items-center cursor-pointer px-4 py-2 rounded-lg  duration-300 mr-5`}
                onClick={() => setShow(!show)}
              >
                <img src={profile} alt="" className="ml-2" />
                <span>دیوار من</span>
              </div>
              {show ? (
                <div className={styles.list}>
                  {myDivarOptions.map((item) => {
                    return item.id == 8 && !data ? (
                      ""
                    ) : item.id == 1 && data ? (
                      ""
                    ) : (
                      <Link
                        to={`/${item.path}`}
                        key={item.id}
                        onClick={clickHandler}
                        name={item.name}
                        className={` ${styles.myDivarOptions}`}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="mr-5 ">
              <Link
                to="/dashboard"
                className=" bg-base text-white rounded-lg p-4 py-2"
              >
                ثبت اگهی
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          show ? "block" : "hidden"
        } fixed top-0 right-0 w-full h-screen z-10`}
        onClick={() => setShow(false)}
      ></div>
    </>
  );
}

export default Header;
