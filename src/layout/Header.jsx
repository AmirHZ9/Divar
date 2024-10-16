import { Link } from "react-router-dom";

import styles from "./Header.module.css"

import divar from "../public/divar.svg";
import loc from "../public/location.svg";
import profile from "../public/profile.svg";
function Header() {
  return (
    <div className={` w-full  ${styles.header}`}>
        <div className="container mx-auto flex items-center justify-between py-5 mb-5">

      <div className="flex items-center">
        <img src={divar} alt="divar" className="w-12 ml-10"/>
        <div className="flex items-center">
          <img src={loc} alt="loc" className="ml-2"/>
          <span>تهران</span>
        </div>
      </div>
      <div className="flex items-center">
        <Link to="/authpage" className="flex items-center">
          <img src={profile} alt="" className="ml-2"/>
          <span>دیوار من</span>
        </Link>
        <div className="mr-5">
          <Link to="/dashboard" className=" bg-base text-white rounded-lg p-4 py-2" >ثبت اگهی</Link>
        </div>
      </div>
        </div>
    </div>
  );
}

export default Header;
