import { Link } from "react-router-dom";


const AddContestantPage = () => {
    return (
        <section className="all">
            <div className="log">
                <h1>Add Contestant</h1>
            </div>
            <form>
                <div>
                    <p>Name</p>
                    <input type="text" name="name" placeholder="Name" />
                </div>
                <div>
                    <p>Nickname</p>
                    <input type="text" name="nickname" placeholder="Nickname " />
                </div>
                <div>
                    <p>Position</p>
                    <select id="dropdown">
                        <option value="option1">President</option>
                        <option value="option2">Vice President</option>
                        <option value="option3">Minister</option>
                    </select>
                    <p className="not">Not here <Link to="/admin/addpost" className="">Add Post</Link></p>
                </div>
                <div>
                    <p>Image</p>
                    <input type="file" name="payment" />
                </div>
                <div>
                   <Link to="/admin/contestants" className="link login">Submit</Link> 
                </div>
                
            </form>
        </section>
        
    );
}

export default AddContestantPage;