import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import './Header.scss';

const Header = () => {
    return ( 
        <header>
            <Row>
                <Col xl="2" lg="2" className="logo-wrapper">
                    <NavLink exact to="/">
                        <h1>
                            Census <br/>
                            2020
                        </h1>
                    </NavLink>
                </Col>
                <Col xl="8" lg="8" className="top-info">
                    <p>
                        This is the official questionnaire for this address. <br/>
                        It is quick and easy to respond, and your answers are protected by law
                    </p>
                </Col>
                <Col xl="2" lg="2" className="gov-info">
                    <p>
                        DEPARTMENT OF COMMERCE <br/>
                        Economics and Statistics Administration  <br/>
                        CENSUS BUREAU
                    </p>
                </Col>
            </Row>
        </header>
    );
}
 
export default Header;