import { Route, Routes } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import HomePage from "../pages/HomePage";
import PageNotFound from "../pages/404";
import AuthPage from "../pages/AuthPage";
import AdminPage from "../pages/AdminPage";
import Dashboard from "../pages/Dashboard";
import getUserProfile from "../services/user";

function Router() {
  const { data, isLoading,error } = useQuery(["profile"], getUserProfile);
  console.log(data,error)
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/adminPage" element={<AdminPage />} />
      <Route path="/authPage" element={<AuthPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
