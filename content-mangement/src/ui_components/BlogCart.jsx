import React from 'react'
import Badge from "./Badge"
import thumbnail from "../images/design_vii.jpg"
import { CartFooter } from './CartFooter'


export const BlogCart = () => {
  return (
     <div className="px-3 py-3 rounded-md w-[300px] h-auto flex flex-col gap-4 dark:border-gray-800 border shadow-lg">
    <div className="w-full h-[200px] border rounded-md overflow-hidden">
      <img
        src={thumbnail}
        className="w-full h-full object-cover rounded-lg"
      />
    </div>

      <Badge />
    
      <h3 className="font-semibold  leading-normal text-[#181A2A] mb-0 dark:text-white">
        Build and Ecommerce Web App with Django and React
      </h3>

    <CartFooter />
  </div>
  )
}
