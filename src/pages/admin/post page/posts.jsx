import { Link } from "react-router-dom";

const Posts = () => {
    return (
        <section className="posts">
            <h1>Posts</h1>
            <ul>
                <li>President</li>
                <li>Vice President</li>
                <li>Senator</li>
                <li>Minister</li>
                <li>Governor</li>
                <li>Chairman</li>
                <li><Link to="/admin/addpost" className="add">Add Post</Link></li>
            </ul>
        </section>
    );
}

export default Posts;
