import { getBlogs } from "@/services/ApiBlog";
import BlogContainer from "@/ui_components/BlogContainer";
import Header from "@/ui_components/Header";
import PagePagination from "@/ui_components/PagePagination";
import { useQuery,keepPreviousData } from "@tanstack/react-query";
import React, { use } from "react";
import { useState } from "react";

const HomePage = () => {

  const [page, setPage] = useState(1);
  const numOfBlogsPerPage = 3;
  const {
    isPending,
    isError,
    error,
    data,
  } = useQuery({
    queryKey: ['blogs', page],
    queryFn: () => getBlogs(page),
    placeholderData: keepPreviousData,
  });

  const blogs = data?.results || [];
  const numOfPages = Math.ceil(data?.count / numOfBlogsPerPage);

  const handleSetPage = (pageNumber) => {
    setPage(pageNumber);
  };
  const increasePageValue = () => {
    if (page < numOfPages) {
      setPage((prev) => prev + 1);
    }
  };
  const decreasePageValue = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  
  return (
    <>
      <Header />
      <BlogContainer isPending={isPending} blogs={blogs} />
      <PagePagination
        page={page}
        numOfPages={numOfPages}
        handleSetPage={handleSetPage}
        increasePageValue={increasePageValue}
        decreasePageValue={decreasePageValue}

      />

    </>
  );
};

export default HomePage;
