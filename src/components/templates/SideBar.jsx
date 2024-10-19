import { useState } from "react";

function SideBar({ data, isLoading }) {
  const [show,setShow] = useState(false)
  return (
    <div className=" ">
      <div className="hidden tabletPro:block">
        <h1 className="font-bold text-title">لیست دسته بندی ها</h1>
        {data?.data.map((item) => (
          <div key={item._id} className="cursor-pointer">
            <h4 className="my-5">{item.name}</h4>
          </div>
        ))}
      </div>
      <div className={`tabletPro:hidden`}>
        <div onClick={()=> setShow(!show)} className="mr-auto inline-block overflow-hidden border border-1  rounded-lg px-4 py-2 my-5">دسته بندی ها</div>
        <div className={`${show ? 'block' : 'hidden'} fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] rounded-lg overflow-hidden p-5 bg-white min-w-[250px] z-20`}>
        {data?.data.map((item) => (
          <div key={item._id} className="cursor-pointer border-b-[1px] border-solid my-4">
            <h4 className="my-5">{item.name}</h4>
          </div>
        ))}
        </div>
      </div>
      <div onClick={() => setShow(false)} className={`${show ? 'block' : "hidden"} tabletPro:hidden fixed top-0 right-0 w-full h-screen bg-gray opacity-35 z-10`}></div>
    </div>
  );
}

export default SideBar;
