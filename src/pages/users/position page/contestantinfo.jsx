import React from 'react';

const ContestantInfo = ({ image, name, description }) => {
    return (
        <div className="choose">
            <label className="containers">
                <input type="checkbox"/>
                <span className="checkmarks"></span>
            </label>
            <img src={image} alt="contestant" width="110px" height="80px" className="img" />
            <article>
                <p>{name}</p>
                <p>{description}</p>
            </article>
        </div>
    );
};

export default ContestantInfo;