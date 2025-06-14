import { getBlogs } from "@/services/ApiBlog";
import BlogContainer from "@/ui_components/BlogContainer";
import Header from "@/ui_components/Header";
import { useQuery } from "@tanstack/react-query";
import React, { use } from "react";

const HomePage = () => {
  const {
    isPending,
    isError,
    error,
    data: blogs,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });
  console.log("blogs type:", typeof blogs);
  return (
    <>
      <Header />
      <BlogContainer isPending={isPending} blogs={blogs?.results || []} />
    </>
  );
};

export default HomePage;
