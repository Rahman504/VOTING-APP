import { Link } from "react-router-dom";


const loginPage = () => {
    return (
        <section className="all">
            <div className="log">
                <h1>Login to Vote</h1>    
            </div>
            <form>
                <div>
                    <p>Email</p>
                    <input type="email" name="email" placeholder="Email" />
                </div>
                <div>
                    <p>Voter ID</p>
                    <input type="text" name="id" placeholder="Voter ID" />
                </div>
                <div>
                    <Link to="/positions" className="link login">Login</Link>
                </div>
            </form>
        </section>
        
    );
}

export default loginPage;