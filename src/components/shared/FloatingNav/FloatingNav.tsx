import React, { useEffect, useState } from 'react';

import './FloatingNav.scss';
import FloatingNavMenu from './FloatingNavMenu';

export const FloatingNav = () => {
    const [open, setOpen] = useState(false);

    const handleStop = (e: TouchEvent) => {
        var box = document.getElementById("floating-nav");
        box.style.bottom = '0';
        box.style.right = '0';
        box.style.top = 'initial';
        box.style.left = 'initial';
    }

    const handleMove = (e: TouchEvent) => {
        setOpen(false);
        var box = document.getElementById("floating-nav");
        var touchLocation = e.targetTouches[0];
        box.style.left = touchLocation.pageX - (box.clientWidth / 2) + 'px';
        box.style.top = touchLocation.pageY - (box.clientHeight / 2) + 'px';
    }

    useEffect(() => {
        let box = document.getElementById("floating-nav");
        box.addEventListener('touchmove', handleMove, false)
        box.addEventListener('touchend', handleStop, false);
        return () => {
            box.removeEventListener('touchmove', handleMove, false);
            box.removeEventListener('touchend', handleStop, false);
        }
    }, [])


    return <>
        <div id="floating-nav" className={open ?  "is-open" : ""}>
            <div id="floating-nav-button" onClick={() => setOpen(!open)}>
                <div>
                    {
                        open ? <svg className="closer" viewBox="0 0 14 14">
                            <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" />
                        </svg>
                        : <svg className="opener" viewBox="0 0 30 30">
                            <path d='M4 7h22M4 15h22M4 23h22'/>
                        </svg>
                    }
                    
                </div>
            </div>
            { open && <FloatingNavMenu setClose={() => setOpen(false)} /> }
        </div>
    </>
}

export default FloatingNav