import React, { useEffect, useState } from 'react';
import { Container, Jumbotron, ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router';

const PostComments = () => {
    const {id}=useParams()
    console.log(id)
    const [posts , setPosts] = useState({})
    const {title,body}=posts

    const [comments , setComments] = useState({})
    const[name,email]=comments

    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/posts/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data))
    },[id])

    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/comments/${id}`
        fetch (url)
        .then (res => res.json())
        .then(data => setComments(data))
    },[id])

   //console.log(posts);
    return (
        <div>
           <h5> User id: {id}</h5>
            <p></p>
            <Jumbotron fluid>
                 <Container>
                        <h1>{title}</h1>
                        <p>{body}  </p>
                     </Container>
                </Jumbotron>
                <ListGroup>
                    <ListGroup.Item>{name}</ListGroup.Item>
                    <ListGroup.Item>{email}</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
        </div>
    );
};

export default PostComments;