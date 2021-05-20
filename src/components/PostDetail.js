import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const PostDetail = (props) =>{
    const [post, setPost] = useState({
        postId : props.postId,
        userId : 1,
        title: "",
        subject : "",
        createdDate : "",
        commentNum : 0,
        viewCount: 1
    })

useEffect(()=>{

    axios.get(`https://blog-tutoring.herokuapp.com/boards/1/posts/${props.postId}`)
        .then(res=>{
            console.log(post.viewCount);
            setPost(res.data)
        })
        .catch(e=>{
            const status = e.response.status;
            if(status===404){
                console.log("redirect");
                props.history.push('/posts/');
            }
            else{
                //unhandled exception.
            }
            alert(e.response.data.message);
        })
},[])
    return(
        <div>
            <Link to="/posts">
                <button> 게시판 이동 </button>
            </Link>
            <p>{post.postId}</p>
            <p>{post.userId}</p>
            <p>{post.title}</p>
            <p>{post.subject}</p>
            <p>{post.viewCount}</p>
            <p>{post.createdDate}</p>
            <p>{post.commentNum}</p>
        </div>
    )
};

export default PostDetail;