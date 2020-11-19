import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.scss';
import Button from 'react-bootstrap/Button';

const Home = () => {
    return (  
        <div className="home common-top">
            <h3>Instructions</h3>
            <div className="instruction-list">
                <h4>
                    Before you answer Question 1, count the people living in this house, 
                    apartment, or mobile home using our guidelines.
                </h4>
                <ul>
                    <li>
                        Count all people, including babies, who live and sleep here most of the time.
                    </li>
                    <li>
                        If no one lives and sleeps at this address most of the time, 
                        go online at my2020census.gov or call the number on page 8.
                    </li>
                </ul>
                <h4>
                    The census must also include people without a permanent place to live, so:
                </h4>
                <ul>
                    <li>
                        If someone who does not have a permanent place to live is staying here on April 1, 2020, count that person.
                    </li>
                </ul>
                <h4>
                    The Census Bureau also conducts counts in institutions and other places, so:
                </h4>
                <ul>
                    <li>
                        Do not count anyone living away from here, either at college or in the Armed Forces.
                    </li>
                    <li>
                        Do not count anyone in a nursing home, jail, prison, detention facility, etc., on April 1, 2020.
                    </li>
                    <li>
                        Leave these people off your questionnaire, even if they will return to 
                        live here after they leave college, the nursing home, the military, 
                        jail, etc. Otherwise, they may be counted twice.
                    </li>
                </ul>
            </div>
            <div className="btn-container">
                <NavLink to="/survey">
                    <Button className="start" variant="dark">
                        <svg xmlns="http://www.w3.org/2000/svg" width="31.499" height="36.001" viewBox="0 0 31.499 36.001">
                            <path id="Icon_awesome-play" data-name="Icon awesome-play" d="M29.841,15.1,5.091.464A3.356,3.356,0,0,0,0,3.368V32.625a3.372,3.372,0,0,0,5.091,2.9L29.841,20.9a3.372,3.372,0,0,0,0-5.808Z" transform="translate(0 -0.002)" fill="#fff"/>
                        </svg>
                        Let's go
                    </Button>
                </NavLink>
            </div>
        </div>
    );
}
 
export default Home;