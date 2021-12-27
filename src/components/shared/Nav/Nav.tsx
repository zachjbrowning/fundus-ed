import React from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../constants/routes';

import './Nav.scss';
import NavMenu from './NavMenu';

export default function Nav() {
    let navigate = useNavigate();

    return <div id="nav">
        <div className="nav-brand">
            <h1 onClick={() => navigate(routes.LANDING_ROUTE)}> Fun-dus</h1>
        </div>
        <div className="nav-menu">
            <NavMenu />
        </div>
    </div>
}