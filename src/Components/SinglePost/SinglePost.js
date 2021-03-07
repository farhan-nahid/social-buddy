import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';

const SinglePost = (props) => {
    
    const {id, title , body} =props.post

    const history = useHistory()
    const  handleClick = ( id) =>{
        const url= `/post/${id}`
        history.push(url)
    }
    return (    
            <Card>
                  <h1>this is post {id}</h1>
             <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text> {body} </Card.Text>
                    <Button onClick={() => handleClick(id)} variant="primary">More Details</Button>
                </Card.Body>
            </Card>
    );
};

export default SinglePost;