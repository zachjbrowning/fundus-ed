import React from 'react';
import { useNavigate } from 'react-router-dom';
import { img } from '../../../../constants/fundi/fundi';

import './LandingTile.scss';

export interface TileProps {
    title: string;
    msg: string;
    img: img;
    route: string;
}

export const LandingTile = (props: TileProps) => {
    let navigate = useNavigate();


    return <div onClick={() => navigate(props.route)} className="landing-tile">
        <div className="landing-tile-img">
            <img src={props.img.src} alt={props.img.alt} />
        </div>
        <div className="landing-tile-words">
            <h1 className="header is-secondary">{props.title}</h1>
            <p>{props.msg}</p>
        </div>
    </div>
}

export default LandingTile