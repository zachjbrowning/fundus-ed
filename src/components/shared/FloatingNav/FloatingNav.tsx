import React, { useEffect, useState } from 'react';

import './FloatingNav.scss';
import FloatingNavMenu from './FloatingNavMenu';

export const FloatingNav = () => {
    const [open, setOpen] = useState(false);
    const [quadrant, setQuadrant] = useState(0);

    const handleStop = (e: TouchEvent) => {
        var box = document.getElementById("floating-nav");
        var width = document.body.clientWidth;
        var height = document.body.clientHeight;
        let left = parseInt(box.style.left) + (box.clientWidth / 2) < width / 2;
        let top = parseInt(box.style.top) + (box.clientHeight / 2) < height / 2; 
        box.style.left = (left ? 0 : width - box.clientWidth) + 'px';
        box.style.top = (top ? 0 : height - box.clientHeight) + 'px';
        setQuadrant(left && top ? 0 : 
            top ? 1 : 
            left ? 2 : 3)
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
        <div id="floating-nav">
            <div id="floating-nav-button" onClick={() => setOpen(!open)}>
                +
            </div>
            { open && <FloatingNavMenu setClose={() => setOpen(false)} quadrant={quadrant} /> }
        </div>
    </>
}

export default FloatingNav