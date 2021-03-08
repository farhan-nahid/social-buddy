import React from 'react';
import { ListGroup } from 'react-bootstrap';

const SingleComment = (props) => {
    const {comment} = props
    const{postId, id , name , email , body } = comment
    return (
        <ListGroup className="mt-5 text-center bg-light container">
            <ListGroup.Item  className="bg-warning">Post ID :{postId}</ListGroup.Item>
            <ListGroup.Item>Comment Id : {id}</ListGroup.Item>
            <ListGroup.Item>Name : {name}</ListGroup.Item>
            <ListGroup.Item>Email : {email}</ListGroup.Item>
            <ListGroup.Item>Body : {body}</ListGroup.Item>
         </ListGroup>
    );
};

export default SingleComment;