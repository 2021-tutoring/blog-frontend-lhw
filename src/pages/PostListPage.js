import PostList from "../components/PostList";
import {Link} from "react-router-dom";

const PostListPage = () =>{
    return(
        <div>

            <p>I'm PostLIstPage!</p>
            <Link to="/post/write">
                <button> 게시글 작성 </button>
            </Link>
            <PostList/>
        </div>
    )
};

export default PostListPage;