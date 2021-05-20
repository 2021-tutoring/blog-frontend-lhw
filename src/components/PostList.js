import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";

const PostList = () =>{
    const [posts, setPosts] = useState([{
        postId : 1,
        userId : 1,
        title: "",
        subject : "",
        createdDate : "",
        commentNum : 0,
        viewCount: 1
    }])

useEffect(()=>{
    axios.get(`https://blog-tutoring.herokuapp.com/boards/1/posts/`)
        .then(res=>{
            console.log(res.data.posts);
            setPosts(res.data.posts);
        })
        .catch(e=>{
            const status = e.response.status;
            if(status==404){
                console.log("redirct");
            }
            else{
                //unhandled exception.
            }
            alert(e.response.data.message);
        })
},[])

    let postInfo = posts => {
        //lo function.
        return posts.map(posts => (
            <tr>
                <th>{posts.postId}</th>
                <th>{posts.userId}</th>
                <th>
                    <Link to={`/posts/${posts.postId}`}>{posts.title}</Link></th>
                <th>{posts.subject}</th>
                <th>{posts.createdDate}</th>
                <th>{posts.commentNum}</th>
                <th>{posts.viewCount}</th>
            </tr>
        ));
    }
    return(
        <table border="1">
            <thead>
            <tr>
                <th>ID</th>
                <th>카테고리</th>
                <th>제목</th>
                <th>내용</th>
                <th>작성일</th>
                <th>댓글수</th>
                <th>조회수</th>
            </tr>
            </thead>
            <tbody>
            {postInfo(posts)}
            </tbody>

        </table>
    )
};
export default PostList;