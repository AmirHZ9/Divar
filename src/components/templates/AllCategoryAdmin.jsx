import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteCategory, getAllCategory } from "../../services/admin";

function AllCategoryAdmin() {
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery(["category"], getAllCategory);
  const { mutate } = useMutation(deleteCategory, {
    onSuccess: () => queryClient.invalidateQueries("category"),
  });
  const deleteHandler = (id) => {
    mutate(id);
  };

  if (isLoading) return <h1>Loading</h1>;
  return (
    <div className="">
      {data.data.map((item) => (
        <div
          key={item._id}
          className="flex justify-between items-center  border rounded-lg my-5 p-5"
        >
          <div>
            <img src={`${item.icon}.svg`} alt="" />

            <p className="font-bold">{item.name}</p>
          </div>
          <div className="flex items-center">
            <p className="text-base font-bold">slug: {item.slug}</p>
            <button
              className="text-white bg-base mr-5 rounded-lg px-5 py-2"
              onClick={() => deleteHandler(item._id)}
            >
              حذف دسته بندی
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllCategoryAdmin;
