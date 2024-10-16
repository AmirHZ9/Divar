import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getUserPosts } from "../../services/user";
import { e2p, p2e, sp } from "../../utils/numbers";

function PostList() {
  const { data, isLoading } = useQuery(["post-List"], getUserPosts);
  console.log(data);
  if (isLoading) return <h1>loading</h1>;
  return (
    <div className="container mx-auto">
      <h3 className="text-titleX font-bold">اکهی های شما</h3>

      {data?.data.posts.map((post) => (
        <div key={post._id} className="flex w-full justify-between items-center border my-5 p-1 rounded-md">
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
          <div className="flex flex-col justify-center items-center">
            <p>{new Date(post.createdAt).toLocaleDateString("fa-ir")}</p>
            <span className="text-desk">{sp(post.amount)} تومان</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostList;
