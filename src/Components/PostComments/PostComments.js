import React from 'react';
import { useParams } from 'react-router';

const PostComments = () => {
    const {id}=useParams()
    console.log(id)
    return (
        <div>
            This is Comment{id}
        </div>
    );
};

export default PostComments;