import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import service from '../../../appwrite/confg';
import { Container, PostCard } from '../index';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Home() {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        service.getPosts().then((data) => {
            if (data) {
                setPosts(data.documents);
            }
        });
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className='w-full py-8'>
            <Container>
                <div className="flex justify-center mx-3">
                    <div className="w-full max-w-screen-lg"> 
                        <Slider {...settings}>
                            {posts.slice(0, 6).map((post) => ( 
                                <div key={post.$id} className='flex justify-center items-center'>
                                    <div className='w-full max-w-md'>
                                        <img 
                                            src={service.getFilePreview(post.featuredImage)} 
                                            alt={post.title} 
                                            className="rounded-xl object-cover w-full h-56 mx-auto bg-slate-500"
                                        />
                                        <h1 className='text-center mt-2 text-lg'>{post.title}</h1>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>

                <div className='flex flex-wrap mt-8'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Home;
