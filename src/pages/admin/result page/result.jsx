import PositionTemplate from "./resulttemplate";
import presImg from "../../../vlcsnap-error029.png";
import { Link } from "react-router-dom";


const ResultPage = () => {
        const presidentContestants = [
                {
                image: presImg,
                contestantName: 'Adebayo',
                votes: '55 votes',
                description: 'Most reliable person',
                },
                {
                image: presImg,
                contestantName: 'Chioma',
                votes: '100 votes',
                description: 'A true leader',
                },
        ];
        const vicePresidentContestants = [
                {
                  image: presImg,
                  contestantName: 'David',
                  votes: '78 votes',
                  description: 'Excellent communicator',
                },
                {
                  image: presImg,
                  contestantName: 'Eve',
                  votes: '279 votes',
                  description: 'Strong organizational skills',
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
                        
                        </section>    
                </section>
                
              
        );
};

export default ResultPage;