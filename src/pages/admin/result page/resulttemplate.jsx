import React from 'react';
import ContestantInfo from "./contestantinfo";

const PositionTemplate = ({ title, showTitle, post, contestants }) => {

    return (
        <>
        {showTitle && <h1 className='title'>{title}</h1>}
        <section className="all position">
            <section>
                <div className="log">
                    <h1>{post}</h1>
                </div>
                <p>List of contestant for {post} position</p>
                <hr/>
                {contestants.map((contestant, index) => (
                <ContestantInfo
                    key={index} 
                    image={contestant.image}
                    votes={contestant.votes} 
                    contestantName={contestant.contestantName}
                    description={contestant.description} 
                />
            ))}
            </section>
        </section>
        </>
        
    )
}

export default PositionTemplate;