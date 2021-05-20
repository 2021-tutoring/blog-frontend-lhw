import Comment from "./Comment";
import {useEffect, useState} from "react";
import axios from "axios";

const Comments = (props) => {

    const [comment, setComment] = useState([{
        userId: 1,
        content: ""
    }]);

    const [comments, getComment] = useState([{
        userId: 1,
        date: "",
        content: "",
        id: 1
    }]);
let updateComments = e =>{
    axios.get(`https://blog-tutoring.herokuapp.com/boards/1/posts/${props.postId}/comments`)
        .then(res=>{
            console.log(res.data.comments);
            getComment(res.data.comments);
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
}
useEffect(()=>{
        updateComments();
},[])


    let updateComment = e =>{
        setComment({
            ...comment,
            content: e.target.value
        });


    }
    let clearComment = e =>{
        setComment({
            ...comment,
            content: ''
        });
    }
    let addComment = () => {

    alert(`${comment.content}를 등록합니다.`)
    setComment({
        ...comment,
        userId: 1
    })
    axios.post(`https://blog-tutoring.herokuapp.com/boards/1/posts/${props.postId}/comments`, comment)
        .then(res=>{
            console.log(res);
            updateComments();
            clearComment();
        })
        .catch(e => {
            console.log(e.response);
            console.log(e.response.status);
            alert(e.response.data.message);
        })
};

    let keyPressEnter= e => {if(e.key === 'Enter') addComment();}

    return(
        <div>
            {comments.map(comment => (<Comment comment = {comment} list = {'dfs'}/>))}
            <input type="text" placeholder="댓글을 입력해주세요" value={comment.content} onChange={updateComment} onKeyPress={keyPressEnter}/>
            <button onClick={addComment}>댓글쓰기</button>
        </div>
    );
};
export default Comments;