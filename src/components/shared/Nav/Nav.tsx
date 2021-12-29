import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { routes } from '../../../constants/routes';

import './Nav.scss';

export const Nav = () => {
    let navigate = useNavigate();

    const burger = <div onClick={() => navigate(routes.LANDING_ROUTE)} className="nav-burger">
        <svg viewBox="0 0 30 30">
            <path d='M4 7h22M4 15h22M4 23h22'/>
        </svg>
    </div>

    return <div id="nav">
        <div className="nav-brand">
            <h1 className="header">Fun-dussss</h1>
        </div>
        <Routes>
            <Route path={routes.LANDING_ROUTE} element={<div />} />
            <Route path="*" element={burger} />
        </Routes>
    </div>
}

export default Nav