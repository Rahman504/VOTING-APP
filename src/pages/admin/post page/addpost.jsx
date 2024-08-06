import { Link } from "react-router-dom";


const addPostPage = () => {
    return (
        <section className="all">
            <div className="log">
                <h1>Add post</h1>   
            </div>
            <form>
                <div>
                    <p>Post name</p>
                    <input type="text" name="name" />
                </div>
                <div>
                    <p>Post description</p>
                    <input type="text" name="password" />
                </div>
                <div>
                    <Link to="" className="link login">Submit</Link>
                </div>
            </form>
        </section>
    );
}

export default addPostPage;