import React from 'react';

const ContestantInfo = ({ image, contestantName, description }) => {
    return (
        <div className="choose">
            <img src={image} alt="contestant" width="110px" height="80px" className="img" />
            <article>
                <p>{contestantName}</p>
                <p>{description}</p>
            </article>
        </div>
    );
};

export default ContestantInfo;