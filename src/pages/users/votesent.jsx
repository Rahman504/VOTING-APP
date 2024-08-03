import { Link } from "react-router-dom";
import successImg from "../../correct.png"


const voteSentPage = () => {
    return (
        <section className="all sent">
            <img src={successImg} alt="success" />
            <h1>Thank you for voting</h1>
            <p>Your vote has been successfully submitted.</p>
            <Link to="/login">Go to login</Link>
        </section>
    );
}

export default voteSentPage;