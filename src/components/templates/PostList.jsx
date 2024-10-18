import toast from "react-hot-toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { deleteUserPost, getUserPosts } from "../../services/user";
import { sp } from "../../utils/numbers";

function PostList() {
  const queryClient = useQueryClient()
  const { data, isLoading } = useQuery(["post-List"], getUserPosts);

  const {mutate}  = useMutation(deleteUserPost,{
    onSuccess:()=>{
      queryClient.invalidateQueries("post-List")
      toast.success("آگهی با موفقیت حذف شد.")
    },
    onError:()=>{
      toast.error("مشکلی پیش آمده.")

    }
  })
  const deleteHandler=(id)=>{
    mutate(id)
  }
  if (isLoading) return <h1>loading</h1>;
  return (
    <div className="container mx-auto">
      <h3 className="text-titleX font-bold">اکهی های شما</h3>

      {data?.data.posts.map((post) => (
        <div
          key={post._id}
          className="flex w-full justify-between items-center border my-5 p-1 rounded-md"
        >
          <div className="flex items-center">
            <img
              src={`${import.meta.env.VITE_BASE_URL}${post.images[0]}`}
              alt="image"
              className="w-20 h-20"
            />
            <div>
              <p className="font-bold">{post.options.title}</p>
              <p>{post.options.content}</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex flex-col justify-center items-center">
              <p>{new Date(post.createdAt).toLocaleDateString("fa-ir")}</p>
              <span className="text-desk">{sp(post.amount)} تومان</span>
            </div>
            <div>
              <button className="bg-base text-white px-4 py-2 mr-3 rounded-lg" onClick={()=>deleteHandler(post._id)}>حذف اگهی</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostList;
