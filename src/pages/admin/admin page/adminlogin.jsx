import { Link } from "react-router-dom";

const adminLoginPage = () => {
    return (
        <section className="all">
            <div className="log">
                <h1>Admin Login</h1>    
            </div>
            <form>
                <div>
                    <p>Email</p>
                    <input type="email" name="email" />
                </div>
                <div>
                    <p>Password</p>
                    <input type="text" name="password" />
                </div>
                <div>
                    <Link to="/admin/addpost" className="link login">Login</Link>
                </div>
            </form>
        </section>
    );
}

export default adminLoginPage;