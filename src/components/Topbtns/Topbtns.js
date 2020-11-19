import React from 'react';
import { Button } from 'react-bootstrap';
import './Topbtns.scss';

const Topbtns = () => {
    return (  
        <div className="top-btns-wrapper">
            <Button variant="light">Pause</Button>
            <Button variant="light">Submit</Button>
        </div>
    );
}
 
export default Topbtns;
