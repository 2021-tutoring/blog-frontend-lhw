import './App.css';
import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PostListPage from "./pages/PostListPage";
import PostDetailPage from "./pages/PostDetailPage";
import PostWritePage from "./pages/PostWritePage";

function App() {
  return (
    <div className="App">
        <Router>
            <Route exact path="/posts" component = {PostListPage}></Route>
            <Route exact path="/posts/:postId" component={PostDetailPage}></Route>
            <Route exact path="/post/write" component={PostWritePage}></Route>
        </Router>
    </div>
  );
}

export default App;
