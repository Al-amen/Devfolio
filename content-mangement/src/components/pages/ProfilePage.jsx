import BlogContainer from '@/ui_components/BlogContainer'
import Hero from '@/ui_components/Hero'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getUserInfo } from '@/services/ApiBlog'
import Spinner from '@/ui_components/Spinner'
import { useState } from "react";
import SignupPage from './SignupPage'
import Modal from '@/ui_components/Modal'


const ProfilePage = ({ authUsername }) => {
  const [showModal, setShowModal] = useState(false);
  const {username} = useParams()

  const toggleModal = () => {
    setShowModal(curr => !curr)
  }

  const { isPending, data } = useQuery({
    queryKey: ["users", username],
    queryFn: () => getUserInfo(username)
  })

  const blogs = data?.author_posts

  if(isPending){
    return <Spinner />
  }

  return (
    <>
      <Hero userInfo={data} authUsername={authUsername} toggleModal={toggleModal} />
      <BlogContainer blogs={blogs} title={`🍔 ${username}'s Posts`} />

      {showModal && (
        <Modal toggleModal={toggleModal}>
          <SignupPage userInfo={data} updateForm={true} toggleModal={toggleModal} />
        </Modal>
      )}
      
    </>
  )
}

export default ProfilePage
