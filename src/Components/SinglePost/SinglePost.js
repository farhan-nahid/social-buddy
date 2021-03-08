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
            <Card className="col-md-4 ">
                  <h1>This is Post {id}</h1>
             <Card.Body>
                    <Card.Title>Title: {title}</Card.Title>
                    <Card.Text> Body: {body} </Card.Text>
                    <Button onClick={() => handleClick(id)} variant="primary">More Details</Button>
                </Card.Body>
            </Card>
    );
};

export default SinglePost;