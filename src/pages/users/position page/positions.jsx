import PositionTemplate from "./positiontemplate";
import presImg from "../../../vlcsnap-error029.png";
import { Link } from "react-router-dom";


const PositionsPage = () => {
        const presidentContestants = [
                {
                image: presImg,
                name: 'Adebayo',
                description: 'Most reliable person'
                },
                {
                image: presImg,
                name: 'Chioma',
                description: 'A true leader'
                },
        ];
        const vicePresidentContestants = [
                {
                  image: presImg,
                  name: 'David',
                  description: 'Excellent communicator'
                },
                {
                  image: presImg,
                  name: 'Eve',
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