import { Link } from "react-router-dom";

const Posts = () => {
    return (
        <section className="posts welcome">
            <nav>
                <ul>
                    <li><Link to="/admin/dashboard" className="side" >Dashboard</Link></li>
                    <hr/>
                    <li><Link to="/admin/posts" className="side" >Post</Link></li>
                    <hr/>
                    <li><Link to="/admin/contestants" className="side">Contestants</Link></li>
                    <hr/>
                    <li><Link to="/admin/result" className="side">Result</Link></li>
                    <hr/>
                    <li><Link to="/admin/status" className="side">Voters</Link></li>
                </ul>
            </nav>
            <article>
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
            </article>
            
        </section>
    );
}

export default Posts;
