import React, { useEffect, useState } from 'react';
import Slider from 'react-slick'; // Import react-slick
import service from '../../../appwrite/confg';
import { Container, PostCard } from '../index';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Home() {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        service.getPosts().then((data) => {
            console.log(data);
            if (data) {
                setPosts(data.documents);
            }
        });
    }, []);

    // Slider settings for full-width slides
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Show one slide at a time
        slidesToScroll: 1, // Scroll one slide at a time
        autoplay: true, // Auto-scroll feature
        autoplaySpeed: 3000, // Auto-scroll speed in milliseconds
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
              
                <div className="flex justify-center">
                    <div className="w-full max-w-xl"> {/* Limit slider width to center it */}
                        <Slider {...settings}>
                            {posts.slice(0, 6).map((post) => ( // Showing the first 6 posts in the slider
                                <div key={post.$id} className='w-full flex justify-center'>
                                    <div className='max-w-xs max-h-500'> {/* Limit image container to 500px */}
                                        <PostCard {...post} />
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
