import React from "react";
import { BlogCart } from "./BlogCart";
import Spinner from "./Spinner";

const BlogContainer = ({ isPending, blogs }) => {
  
  console.log('blog-cart', blogs);

  if (isPending) {
    return <Spinner />;
  }

  return (
    <section className="padding-x py-6  max-container">
      <h2 className="font-semibold text-xl mb-6 dark:text-white text-center">
        🍔Latest Posts
      </h2>

      <div className="flex items-center gap-6 justify-center flex-wrap">
        {Array.isArray(blogs) &&
          blogs.map((blog) => {
            
            return <BlogCart key={blog.id} blog={blog} />;
          })}
      </div>
    </section>
  );
};

export default BlogContainer;
