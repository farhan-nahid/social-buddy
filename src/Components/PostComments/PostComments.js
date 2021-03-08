import React, { useEffect, useState } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import { useParams } from 'react-router';
import SingleInformation from '../SingleInformation/SingleInformation';

const PostComments = () => {
    const {id}=useParams()
    console.log(id)
    const [posts , setPosts] = useState({})
    const {title,body}=posts

  

    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/posts/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data))
    },[id])

   

   //console.log(posts);
    return (
        <div>
           <h4 className="text-danger mt-4"> User id: {id}</h4>
            <p></p>
            <Jumbotron fluid>
                 <Container>
                        <h3>Title : {title}</h3>
                        <p>Body : {body}  </p>
                     </Container>
                </Jumbotron>
              <SingleInformation id={id}/>
        </div>
    );
};

export default PostComments;