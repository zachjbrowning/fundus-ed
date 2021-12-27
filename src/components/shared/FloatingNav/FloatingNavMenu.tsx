import React from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../constants/routes';

import './FloatingNavMenu.scss';

interface props {
    quadrant: number;

}

export const FloatingNavMenu = (props: props) => {
    let navigate = useNavigate();
    return <div id="floating-nav-menu" className={`quadrant-${props.quadrant}`}>
        <button onClick={() => navigate(routes.LANDING_ROUTE)} className="button is-primary">Home</button>
    </div>
}

export default FloatingNavMenu