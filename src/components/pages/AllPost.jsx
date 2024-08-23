import React, { useState, useEffect } from 'react';
import Container from '../container/Container';
import service from '../../../appwrite/confg';
import PostCard from '../PostCard'

function AllPost() {
    const [posts, setPosts] = useState([]);  // Initialize as an empty array

    useEffect(() => {
        service.getPosts([]).then((data) => {
            
            if (data && data.documents) {
                setPosts(data.documents);
            } else {
                console.log("No Post Found");
                setPosts([]);
            }
        }).catch((error) => {
            console.error("Error fetching posts:", error);
            setPosts([]);
        });
    }, []);

    return (
        <div className='py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <div key={post.$id} className='p-2 w-1/4'>
                                <PostCard  {...post} />
                            </div>
                        ))
                    ) : (
                        <p>No posts found.</p>
                    )}
                </div>
            </Container>
        </div>
    );
}

export default AllPost;
