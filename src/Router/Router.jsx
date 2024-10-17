import { Navigate, Route, Routes } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import HomePage from "../pages/HomePage";
import PageNotFound from "../pages/404";
import AuthPage from "../pages/AuthPage";
import AdminPage from "../pages/AdminPage";
import Dashboard from "../pages/Dashboard";
import { getUserProfile } from "../services/user";
import PostDetails from "../pages/PostDetails";

function Router() {
  const { data, isLoading, error } = useQuery(["profile"], getUserProfile);
  if (isLoading) return <h1>loading</h1>;
  console.log(data, error);
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route
        path="/dashboard"
        element={data ? <Dashboard /> : <Navigate to="/authPage" />}
      />
      <Route
        path="/adminPage"
        element={
          data && data.data.role == "ADMIN" ? (
            <AdminPage />
          ) : (
            <Navigate to="/" />
          )
        }
      />
      <Route
        path="/authPage"
        element={!data ? <AuthPage /> : <Navigate to="/dashboard" />}
      />
      <Route path="/post/:id" element={<PostDetails />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
