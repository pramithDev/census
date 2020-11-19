import React from 'react';
import './Sidenav.scss';
import { useRouteMatch, NavLink } from "react-router-dom";

const Sidenav = () => {
    let { url } = useRouteMatch();
    return ( 
        <ul className="sidenav-ul">
            <li>
                <NavLink to={`${url}/person1`}>Person 1</NavLink>
            </li>
            <li>
                <NavLink to={`${url}/person2`}>Person 2</NavLink>
            </li>
            <li>
                <NavLink to={`${url}/person3`}>Person 3</NavLink>
            </li>
            <li>
                <NavLink to={`${url}/person4`}>Person 4</NavLink>
            </li>
            <li>
                <NavLink to={`${url}/person5`}>Person 5</NavLink>
            </li>
        </ul>
     );
}
 
export default Sidenav;