import { Link } from "react-router-dom";

const AdminDashboard = () => {
    return (
        <div className="welcome">
            <nav>
                <ul>
                    <li><Link to="/admin/posts" className="side" >Post</Link></li>
                    <hr/>
                    <li><Link to="/admin/contestants" className="side">Contestants</Link></li>
                    <hr/>
                    <li><Link to="/admin/result" className="side">Result</Link></li>
                    <hr/>
                    <li><Link to="/admin/status" className="side">Voters</Link></li>
                </ul>
            </nav>
            <div className="begin">
                <h1>WELCOME</h1>
                <article className="start">
                    <p>Start Vote</p>
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                    </label>
                </article>
            </div>
        </div>
    );
}

export default AdminDashboard;
