import api from '@/api';


// ✅ Fix this in ApiBlog.js
export async function getBlogs(page) {
   try {
      const response = await api.get(`blog_list/?page=${page}`);
      return response.data;
   } 
   catch(error) {
      console.error("Error fetching blogs:", error);
      throw new Error("Failed to fetch blogs");
   }
}


export async function blog_detail(slug) {
   try {
      const response = await api.get(`detail_blog/${slug}/`);
      return response.data;
   } 
   catch(error) {
      console.error("Error fetching blog detail:", error);
      throw new Error("Failed to fetch blog detail");
   }
   
}