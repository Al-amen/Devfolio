import api from '@/api';


export async function getBlogs() {
   try {
      const response = await api.get('blog_list/')
      return response.data;
   } 
   catch(error) {
      console.error("Error fetching blogs:", error);
      throw new Error("Failed to fetch blogs");
   }
}