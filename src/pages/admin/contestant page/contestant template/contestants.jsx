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
                <>
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
                <div className="div">
                   <Link to="/admin/addcontestant" className="link vote">Add Contestant</Link>        
                </div>
                   
                </>
              
        );
};

export default ContestantPage;