import React from 'react';
import { useNavigate } from "react-router-dom";
import { routes } from '../../constants/routes';
import './LandingRoute.scss';

export default function LandingRoute() {
    let navigate = useNavigate();
    return <div className="landing-route">
        <button className="button is-primary" onClick={() => navigate(routes.CHEATSHEET_ROUTE)}>
            Cheatsheet
        </button>
        <button className="button is-primary" onClick={() => navigate(routes.MANGEMENT_ROUTE)}>
            Management
        </button>
        <button className="button is-primary" onClick={() => navigate(routes.MORE_ROUTE)}>
            More info
        </button>
    </div>
}