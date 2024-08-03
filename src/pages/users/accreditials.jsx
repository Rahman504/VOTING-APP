import { Link } from "react-router-dom";


const accreditialsPage = () => {
    return (
        <section className="all">
            <div className="log">
                <h1>Accreditials</h1>
            </div>
            <form>
                <div>
                    <p>Name</p>
                    <input type="text" name="name" placeholder="Name" />
                </div>
                <div>
                    <p>Email</p>
                    <input type="email" name="Email" placeholder="Email " />
                </div>
                <div>
                    <p>Payment</p>
                    <input type="file" name="payment" />
                </div>
                <div>
                   <Link to="/login" className="link login">Submit</Link> 
                </div>
                
            </form>
        </section>
        
    );
}

export default accreditialsPage;