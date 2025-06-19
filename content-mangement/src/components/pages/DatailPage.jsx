import Badge from "@/ui_components/Badge";
import React from "react";
import banner from "../../images/detailBanner.jpg";
import { BlogWriter } from "@/ui_components/BlogWriter";
import { useQuery } from "@tanstack/react-query";
import { blog_detail } from "@/services/ApiBlog";
import { useParams } from "react-router-dom";
import { BaseURL } from "@/api";
import Spinner from "@/ui_components/Spinner";
import { HiPencilAlt } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import Modal from "@/ui_components/Modal";
import CreatePostPage from "./CreatePostPage";
import { deleteBlog } from "@/services/ApiBlog";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";



const DatailPage = ({ username, isAuthenticated }) => {
  const { slug } = useParams();
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()
  const {
    isPending,
    isError,
    error,
    data: blog,
  } = useQuery({
    queryKey: ["detail_blog", slug],
    queryFn: () => blog_detail(slug),
  });

  const blogID = blog?.id

  function toggleModal(){
    setShowModal(curr => !curr)
  }

  const deleteMutation = useMutation({
    mutationFn: (id) => deleteBlog(id),
    onSuccess: () => {
      toast.success("Your post has been deleted successfully!")
      navigate("/")
    },

    onError: (err) => {
      console.log(err)
      toast.error(err.message)
    }
  })

  function handleDeleteBlog(){
    const popUp = window.confirm("Are you sure you want to delete this post?")
    if(!popUp){
      return;
    }

    deleteMutation.mutate(blogID)

  }





  if (isPending) {
    return <Spinner />;
  }
 console.log(username)


  return (
   <>
    <div className="padding-dx max-container py-9">
      <Badge blog={blog} />

      <div className="flex justify-between items-center">
        <h2 className="py-6 leading-normal text-2xl md:text-3xl text-[#181A2A] tracking-wide font-semibold dark:text-[#FFFFFF]">
          {blog?.title}
        </h2>
        {isAuthenticated && username === blog.author.username && (
          <span className="flex justify-between items-center gap-2">
            <HiPencilAlt
              onClick={toggleModal}
              className="dark:text-white text-3xl cursor-pointer"
            />

            <MdDelete onClick={handleDeleteBlog}  className="dark:text-white text-3xl cursor-pointer" />
          </span>
        )}
      </div>

      <BlogWriter blog={blog} />

      <div className="w-full h-[350px] my-9 overflow-hidden rounded-sm">
        <img
          className="w-full h-full object-cover rounded-sm"
          src={`${BaseURL}${blog?.featured_image}`}
        />
      </div>
      <p className="text-[16px] leading-[2rem] text-justify text-[#3B3C4A] dark:text-[#BABABF]">
        {blog?.content}
      </p>
    </div>
    {showModal && <Modal toggleModal={toggleModal}> 
        <CreatePostPage blog={blog} />
      </Modal>}
    </>
  );
};


export default DatailPage;
