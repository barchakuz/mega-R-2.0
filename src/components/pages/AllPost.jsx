import React,{useState, useEffect} from 'react'
import Container from '../container/Container'
import PostCard from '../PostCard'
import appwriteService from '../../../appwrite/confg'


function AllPost() {
    const [posts , setPosts] = useState();
    useEffect(()=>{},[])
    appwriteService.getPosts([]).then((posts)=>{
        if (posts) {
            setPosts(posts)
        }
    })
  return (
    <div className='py-8'>
        <Container>
            <div className='flex flex-wrap'>
                    {posts.map((post)=>{
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    })}
            </div>
        </Container>
    </div>
  )
}

export default AllPost