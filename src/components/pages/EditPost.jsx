import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import appwriteService from '../../../appwrite/confg'
import PostForm from '../post-form/Postform'
import Container from '../container/Container'

function EditPost() {
    const [post , setPost] = useState()
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        if (slug) {
            appwriteService.updatePost([slug]).then((post)=>{
                setPost(post)
            })
            
        }else{
            navigate('/')
        }
    },[slug, navigate])
  return post ? (
    <div className='py-8'>
        <Container>
        <PostForm /> 
        </Container>
    </div>
  ) : null
}

export default EditPost