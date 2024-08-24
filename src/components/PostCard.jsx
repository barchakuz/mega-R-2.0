import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import service from '../../appwrite/confg'
function PostCard({$id,title,featuredImage, userId}) {

 return (
<Link to={`post/${$id}`}>
    <div className="w-full bg-gray-100 rounded-xl p-4 h-56 overflow-hidden border border-transparent hover:border-blue-500">
        <div className="w-full flex justify-center mb-4 h-32 overflow-hidden">
            <img 
                src={service.getFilePreview(featuredImage)} 
                alt={title} 
                className="rounded-xl object-cover w-full h-full"
            />
        </div>
        <h2 className="text-l font-bold truncate">{title}</h2>
        <button className=' underline text-sm'>Read Now</button>
    </div>
</Link>

  )
}

export default PostCard