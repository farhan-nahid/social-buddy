import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import SingleComment from "../SingleComment/SingleComment";

const SingleInformation = (props) => {
    console.log(props);
     const {id}=props
     const [comments , setComments] = useState([])

 useEffect(()=>{
         const url =`https://jsonplaceholder.typicode.com/comments/?postId=${id}`
         fetch (url)
         .then (res => res.json())
         .then(data => setComments(data))
     },[id])

     const history = useHistory()
     const backToHome = () =>{
     const url = "/home"
     history.push(url)
    }

    return (
         <div>
             <h4 className="text-danger">Number of comments : {comments.length}</h4>
             {
                 comments.map(comment => <SingleComment comment={comment}/>)
             }
             <div className="text-center m-3">
             <button onClick={()=>backToHome()} className="btn  btn-danger">Back</button>
             </div>
             
         </div>
    
    )
};

export default SingleInformation;