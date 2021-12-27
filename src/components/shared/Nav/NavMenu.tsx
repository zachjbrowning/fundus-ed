import React, { useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { routes } from '../../../constants/routes';

import './NavMenu.scss';

export default function NavMenu() {
    let [isOpen, setIsOpen] = useState(false);
    let navigate = useNavigate();

    return <>
        <div className={`nav-hamburger`}>
            <svg onClick={() => setIsOpen(true)}  viewBox="0 0 30 30">
                <path d='M4 7h22M4 15h22M4 23h22'/>
            </svg>
        </div>
        {
            isOpen && <div className={`nav-open-menu`}>
                <svg onClick={() => setIsOpen(false)} viewBox="0 0 14 14">
                    <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" />
                </svg>
                <div className="open-mobile-nav-menu">
                    <div onClick={() => {setIsOpen(false); navigate(routes.CHEATSHEET_ROUTE)}}>
                        Cheatsheet
                    </div>
                    <div onClick={() => {setIsOpen(false); navigate(routes.MANGEMENT_ROUTE)}}>
                        Management
                    </div>
                    <div onClick={() => {setIsOpen(false); navigate(routes.MORE_ROUTE)}}>
                        More
                    </div>
                </div>
            </div>
        }
    </>
}