import { useQuery } from "@tanstack/react-query";

import { getAllPosts } from "../services/user";
import { getAllCategory } from "../services/admin";

import SideBar from "../components/templates/SideBar";
import Main from "../components/templates/Main";

function HomePage() {
  const { data: posts, isLoading } = useQuery(["All-Posts"], getAllPosts);
  const { data: categories, isLoading: categoryLoading } = useQuery(
    ["category"],
    getAllCategory
  );

  return (
    <div className="container mx-auto grid grid-cols-12">
      <div className="col-span-12 tabletPro:col-span-2">
        <SideBar data={categories} isLoading={categoryLoading} />
      </div>
      <div className="col-span-12 tabletPro:col-span-10">
        <Main data={posts} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default HomePage;
