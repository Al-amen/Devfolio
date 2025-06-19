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
import SignupPage from "./components/pages/SignupPage";
import CreatePostPage from "./components/pages/CreatePostPage";
import LoginPage from "./components/pages/LoginPage";
import ProtectedRoute from "./ui_components/ProtectedRoute";
import { getUsername } from "./services/ApiBlog";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";



function App() {
  const [username, setUsername] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { data } = useQuery({
    queryKey: ["username"],
    queryFn: getUsername,
  });
  console.log(data);

  useEffect(
    function () {
      if (data) {
        setUsername(data.username);
        setIsAuthenticated(true);
      }
    },
    [data]
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AppLayout
              isAuthenticated={isAuthenticated}
              username={username}
              setUsername={setUsername}
              setIsAuthenticated={setIsAuthenticated}
            />
          }
        >
          <Route index element={<HomePage />} />
          <Route path="/profile/:username" element={<ProfilePage authUsername={username} />} />
          <Route
            path="detail_blog/:slug"
            element={
              <DatailPage
                username={username}
                isAuthenticated={isAuthenticated}
              />
            }
          />
         
          <Route path="signup" element={<SignupPage />} />
          <Route
            path="create"
            element={
              <ProtectedRoute>
                {" "}
                <CreatePostPage isAuthenticated={isAuthenticated} />{" "}
              </ProtectedRoute>
            }
          />
          <Route
            path="signin"
            element={
              <LoginPage
                setIsAuthenticated={setIsAuthenticated}
                setUsername={setUsername}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
