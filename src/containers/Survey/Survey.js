import React from 'react';
import './Survey.scss';
import { useRouteMatch, Switch, Route } from "react-router-dom";
import Person from '../../components/Person/Person';
import Sidenav from '../../components/Sidenav/Sidenav';
import Topbtns from '../../components/Topbtns/Topbtns';
import Person2 from '../../components/Person2/Person2';

const Survey = () => {
    let { path } = useRouteMatch();

    return (    
        <div className="survey-main-container common-top">
            <Topbtns/>
            <div className="survey-sidenav">
                <Sidenav/>
            </div>
            <div className="survey-content">
                <Switch>
                    <Route exact path={path}>
                        <h3>Please select each tab one by one and complete the relevent details.</h3>
                    </Route>
                    <Route path={`${path}/person1`}>
                        <Person/>
                    </Route>
                    <Route path={`${path}/person2`}>
                        <Person/>
                    </Route>
                </Switch>
            </div>
        </div>
    );
}
 
export default Survey;
