import React from "react";
import pic from "../images/pic.jpg";
import { BaseURL } from "@/api";
import { FormatDate } from "@/services/FormateDate";
import { Link } from "react-router-dom";

export const BlogWriter = ({ blog }) => {
  return (
    <Link to={`/profile/${blog.author.username}`}>
      <div className="flex items-center gap=4 ">
        <span className="flex items-center gap-2">
          <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
            <img
              src={`${BaseURL}${blog?.author?.profile_picture}`}
              className="c rounded-full w-full h-full object-cover"
            />
          </div>

          <small className="text-[#696A75] text-[14px]">
            {blog?.author?.first_name} {blog?.author?.last_name}
          </small>
        </span>

        <small className="text-[#696A75] text-[14px] ml-3">
          {FormatDate(blog.published_at)}
        </small>
      </div>
    </Link>
  );
};
