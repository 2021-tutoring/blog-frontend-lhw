import PostDetail from "../components/PostDetail";
import Comments from "../components/Comments";

const PostDetailPage = (props) =>{

    console.log(props.match);

    return(
        <div>
            <p>I'm PostDetailPage! page: {props.match.params.postId}</p>
            <PostDetail postId={props.match.params.postId} subject={props.match.params.subject} history={props.history}/>
            <Comments postId={props.match.params.postId}/>
        </div>
    )
};

export default PostDetailPage;