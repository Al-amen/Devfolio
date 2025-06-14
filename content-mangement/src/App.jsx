import { useState } from "react";

import viteLogo from "/vite.svg";
import { Button } from "./components/ui/button";
import { Navbar } from "./ui_components/Navbar";
import Header from "./ui_components/Header";
import BlogContainer from "./ui_components/BlogContainer";
import Footer from "./ui_components/Footer";
import HomePage from "./components/pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./ui_components/AppLayout";
import ProfilePage from "./components/pages/ProfilePage";
import DatailPage from "./components/pages/DatailPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="detail" element={<DatailPage />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
