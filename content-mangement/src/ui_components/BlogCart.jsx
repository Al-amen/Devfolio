import React from "react";
import Badge from "./Badge";
import thumbnail from "../images/design_vii.jpg";
import { CartFooter } from "./CartFooter";
import { Link } from "react-router-dom";
import {BaseURL} from '@/api';




export const BlogCart = ({blog}) => {

  return (
    <div className="px-3 py-3 rounded-md w-[300px] h-auto flex flex-col gap-4 dark:border-gray-800 border shadow-lg">
      <div className="w-full h-[200px] border rounded-md overflow-hidden">
        <img
          src={`${BaseURL}${blog.featured_image}`}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <Badge blog={blog} />
      <Link to= {`/detail_blog/${blog.slug}`}>
        <h3 className="font-semibold  leading-normal text-[#181A2A] mb-0 dark:text-white">
          {blog.title}
        </h3>
      </Link>

      <CartFooter blog={blog} />
    </div>
  );
};
