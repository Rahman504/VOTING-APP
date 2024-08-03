

const adminLoginPage = () => {
    return (
        <form>
            <h1>Admin Login</h1>
            <div>
                <p>Email</p>
                <input type="email" name="email" />
            </div>
            <div>
                <p>Password</p>
                <input type="text" name="password" />
            </div>
            <input type="submit" value="Login" />
        </form>
    );
}

export default adminLoginPage;