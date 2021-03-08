import React, { useEffect, useState } from 'react';
import SinglePost from '../SinglePost/SinglePost';

const Home = () => {
   const [posts, setPosts] = useState([]);
   useEffect(()=>{
       const url = 'https://jsonplaceholder.typicode.com/posts' 
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data))
   },[])
 //  console.log(posts);
    return (
        <div>
            <h1>My Total Posts :{posts.length} </h1>
            <div className="container">
                <div className="row">
                {
                posts.map(post=> <SinglePost key={post.id}  post ={post}/>)
                }
                </div>
            </div>
        </div>
    );
};

export default Home;