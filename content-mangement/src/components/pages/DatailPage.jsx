import Badge from "@/ui_components/Badge";
import React from "react";
import banner from "../../images/detailBanner.jpg"
import { BlogWriter } from "@/ui_components/BlogWriter";
import { useQuery } from "@tanstack/react-query";
import { blog_detail } from "@/services/ApiBlog";
import { useParams } from "react-router-dom";
import { BaseURL } from "@/api";
import Spinner from "@/ui_components/Spinner";



const DatailPage = () => {
  const { slug } = useParams();
  const {
    isPending,
    isError,
    error,
    data: blog,
  } = useQuery({
    queryKey: ["detail_blog", slug],
    queryFn: () => blog_detail(slug),
  });

  console.log(blog);

  if (isPending) {
    return <Spinner />;
  }
  return (
    <div className="padding-dx max-container py-9">
      <Badge blog={blog} />

      <div className="flex justify-between items-center">
        <h2 className="py-6 leading-normal text-2xl md:text-3xl text-[#181A2A] tracking-wide font-semibold dark:text-[#FFFFFF]">
          {blog?.title}
        </h2>
      </div>

      <BlogWriter blog={blog} />

      <div className="w-full h-[350px] my-9 overflow-hidden rounded-sm">
        <img className="w-full h-full object-cover rounded-sm" src={`${BaseURL}${blog?.featured_image}`} />
      </div>
      <p className="text-[16px] leading-[2rem] text-justify text-[#3B3C4A] dark:text-[#BABABF]">
        {blog?.content}
      </p>
    </div>
  );
};

export default DatailPage;
