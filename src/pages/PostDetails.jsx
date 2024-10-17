import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getAllPosts } from "../services/user";
import loc from "../public/location.svg";
import { sp } from "../utils/numbers";
function PostDetails() {
  const { data, isLoading } = useQuery(["All-Posts"], getAllPosts);
  const { id } = useParams();
  const post = data?.data.posts.find((item) => item._id == id);

  if (isLoading) return <h1>loading</h1>;
  return (
    <div className="container mx-auto flex justify-between">
      <div className="w-full border border-solid border-gray p-5 rounded-lg">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-titleXl">{post.options.title}</h1>
          <span className="flex items-center text-gray">
            <img src={loc} alt="img" />
            {post.options.city}
          </span>
        </div>
        <div>
          <p className="my-10">{post.options.content}</p>
        </div>
        <div className="mr-auto w-fit text-gray">{sp(post.amount)} تومان</div>
      </div>
      <img src={`${import.meta.env.VITE_BASE_URL}${post.images}`} alt="" />
    </div>
  );
}

export default PostDetails;
