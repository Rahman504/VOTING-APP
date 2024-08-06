import PositionTemplate from "./resulttemplate";
import presImg from "../../../vlcsnap-error029.png";


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
                   
                </>
              
        );
};

export default ResultPage;