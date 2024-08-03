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
                <div>
                    <p>INSTRUCTIONS</p>
                    <article className='instruction'>
                        <span>Select</span>
                        <span className='num'>1</span>
                        <span>option</span>
                        <span>from</span>
                        <span>the</span> 
                        <span>list</span>
                        <span>below.</span> 
                        <span className='req'>* Required</span>
                    </article>
                </div>
                <hr/>
                {contestants.map((contestant, index) => (
                <ContestantInfo
                    key={index} 
                    image={contestant.image} 
                    name={contestant.name} 
                    description={contestant.description} 
                />
            ))}
            </section>
        </section>
        </>
        
    )
}

export default PositionTemplate;