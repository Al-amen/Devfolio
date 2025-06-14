import React from "react";

import pic from "../images/pic.jpg"
import { BaseURL } from "@/api";
import { FormatDate } from "../services/formateDate"

export const CartFooter = ({blog}) => {
  return (
    <div className="flex items-center gap=4 ">
      <span className="flex items-center gap-2">
        <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
          <img
            src={`${BaseURL}${blog.author?.profile_picture || pic}`}
            alt="Author pic"
            className="c rounded-full w-full h-full object-cover"
          />
        </div>

        <small className="text-[#97989F] text-[12px] font-semibold">
          {blog.author?.first_name } {blog.author?.last_name}
        </small>
      </span>

      <small className="text-[#97989F] text-[12px] font-semibold ml-3">
        {FormatDate(blog.published_at)}
      </small>
    </div>
  );
};
