import {useState} from "react";
import '../App.css';
import {useHistory} from "react-router-dom";
import axios from "axios";

const PostWrite = (props) => {
    let history = useHistory();
    const [post, setPost] = useState({
        id: 1,
        subject: "",
        title: ""
    });
    let updatePostTitle = e => {
        console.log(e.target.value);
        setPost({
                ...post,
                title: e.target.value
            }
        )
    }
    let updatePostSubject = e => {
        console.log(e.target.value);
        setPost({
                ...post,
                subject: e.target.value
            }
        )
    }
    let addPost = () => {
        setPost({
            ...post,
            id: 1
        })
        alert(`게시글 ${post.title}를 등록합니다.`);
        axios.post("https://blog-tutoring.herokuapp.com/boards/1/posts", post)
            .then(res=>{
                console.log(res);
                history.push(`/posts/${res.data.postId}`);
            })
            .catch(e => {
                console.log(e.response);
                console.log(e.response.status);
                alert(e.response.data.message);
            })
        //history.push("/posts");
    }

    let keyPressEnter = e => {
        if (e.key === 'Enter') addPost();
    }
    return (

        <div>
            <a href="/posts">
                <button type="primary">게시판으로 돌아가기</button>
            </a>
                <br/>
                <div style={{width: "80%", margin: "2rem auto"}}> {/* 수정된 부분*/}
                    <label>Title: </label>
                    {/*<Input onChange={params.} value={PostDetail.} type="text" name="title" />*/}
                    <input id="titleInput" type="text" placeholder="제목을 입력해주세요" value={post.title} onChange={updatePostTitle}
                           onKeyPress={keyPressEnter}/>
                    <hr></hr>
                    <textarea rows="30" placeholder="본문을 입력해주세요" onChange={updatePostSubject} value={post.subject} name="content" />

                </div>
                <button type="primary" onClick={addPost}> {addPost ? "등록" : "등록"} </button>
        </div>
    );
}
export default PostWrite;