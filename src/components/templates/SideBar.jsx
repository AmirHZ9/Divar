

function SideBar({data,isLoading}) {

 
  return (
    <div>
        <h1 className="font-bold text-title">لیست دسته بندی ها</h1>
      {data?.data.map((item) => (
        <div key={item._id} className="cursor-pointer">
          <h4 className="my-5">{item.name}</h4>
        </div>
      ))}
    </div>
  );
}

export default SideBar;
