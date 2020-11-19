import React from 'react';
import './Person.scss';

const Person = () => {
    return (  
        <div className="main-view-wrapper">
            <div className="survey-main">
                <div className="survey-item">
                    <h4>
                        <span>01. </span>
                        How many people were living or staying in this house,
                        apartment, or mobile home on April 1, 2020?
                    </h4>
                    <ul>
                        <li>
                            Number of people =  <input type="text" className="peoplw-count" maxLength="2" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
 
export default Person;