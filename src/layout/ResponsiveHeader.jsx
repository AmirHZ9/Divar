import { Link } from "react-router-dom";

function ResponsiveHeader({ data, setShowSideBar, showSideBar }) {
  return (
    <div className="">
      <div className={`${showSideBar ? "left-0":"left-[-255px] "}transition-all z-20 fixed h-screen left-0 top-0 bg-white min-w-[250px] duration-300`}>
        <h1 className="text-titleX font-bold text-center border-b-2 border-base my-10 pb-5">
          فهرست
        </h1>
        <div className="  flex flex-col items-center justify-center px-5">
          {data?.data?.role == "ADMIN" && (
            <Link
              to="/adminPage"
              className="text-base border border-base border-solid px-4 py-2 rounded-lg w-full text-center mb-5"
            >
              پنل ادمین
            </Link>
          )}

          <div className="  w-full">
            <Link
              to="/dashboard"
              className=" bg-base text-white rounded-lg p-4 py-2 w-full inline-block text-center"
            >
              ثبت اگهی
            </Link>
          </div>
        </div>
      </div>

      <div
        onClick={() => setShowSideBar(false)}
        className={`${
          showSideBar ? "block" : "hidden"
        } fixed top-0 right-0 w-full h-screen  bg-gray opacity-35 duration-300 transition-all ease-linear`}
      ></div>
    </div>
  );
}

export default ResponsiveHeader;
