import PositionTemplate from "./positiontemplate";
import presImg from "../../../vlcsnap-error029.png";
import { Link } from "react-router-dom";


const PositionsPage = () => {
        const presidentContestants = [
                {
                image: presImg,
                contestantName: 'Adebayo',
                radio: 'president',
                description: 'Most reliable person'
                },
                {
                image: presImg,
                contestantName: 'Chioma',
                radio: 'president',
                description: 'A true leader'
                },
        ];
        const vicePresidentContestants = [
                {
                  image: presImg,
                  contestantName: 'David',
                  radio: 'vice',
                  description: 'Excellent communicator'
                },
                {
                  image: presImg,
                  contestantName: 'Eve',
                  radio: 'vice',
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
                   <Link to="/votesent" className="link vote">Submit vote</Link>        
                </div>
                   
                </>
              
        );
};

export default PositionsPage;