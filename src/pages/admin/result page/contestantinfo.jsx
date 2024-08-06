import React from 'react';

const ContestantInfo = ({ image, contestantName, votes, description }) => {
    return (
        <>
            <section className='result'>
                <div className="choose another">
                    <img src={image} alt="contestant" width="110px" height="80px" className="img" />
                    <article>
                        <p>{contestantName}</p>
                        <p>{description}</p>
                    </article>
                </div>
                <h1>{votes}</h1>
            </section>
             <hr className='divider'/>
        </>
        
        
    );
};

export default ContestantInfo;