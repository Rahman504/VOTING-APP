import PositionTemplate from "./positiontemplate";
import presImg from "../../../../vlcsnap-error029.png";
import { Link } from "react-router-dom";


const ContestantPage = () => {
        const presidentContestants = [
                {
                image: presImg,
                contestantName: 'Adebayo',
                description: 'Most reliable person'
                },
                {
                image: presImg,
                contestantName: 'Chioma',
                description: 'A true leader'
                },
        ];
        const vicePresidentContestants = [
                {
                  image: presImg,
                  contestantName: 'David',
                  description: 'Excellent communicator'
                },
                {
                  image: presImg,
                  contestantName: 'Eve',
                  description: 'Strong organizational skills'
                },
        ];
        return (
                <section className="welcome con">
                        <nav className="nav">
                                <ul>
                                        <li><Link to="/admin/dashboard" className="side">Dashboard</Link></li>
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
                        <section className="contest">
                        <div>
                                <PositionTemplate 
                                title="DemocracyNow"
                                showTitle={true}
                                post="President" 
                                contestants={presidentContestants} 
                                />
                                <PositionTemplate 
                                title="DemocracyNow"
                                showTitle={false}
                                post="Vice President" 
                                contestants={vicePresidentContestants} 
                                />
                        </div> 
                        <div className="div third">
                            <Link to="/admin/addcontestant" className="link vote">Add Contestant</Link>        
                        </div>
                        </section>
                </section>
                
                   
              
        );
};

export default ContestantPage;