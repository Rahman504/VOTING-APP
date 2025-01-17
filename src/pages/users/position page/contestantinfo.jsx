import React from 'react';

const ContestantInfo = ({ image, contestantName, radio, description }) => {
    return (
        <div className="choose">
            <label className="containers">
                <input type="radio" name={radio} />
                <span className="checkmarks"></span>
            </label>
            <img src={image} alt="contestant" width="110px" height="80px" className="img" />
            <article>
                <p>{contestantName}</p>
                <p>{description}</p>
            </article>
        </div>
    );
};

export default ContestantInfo;