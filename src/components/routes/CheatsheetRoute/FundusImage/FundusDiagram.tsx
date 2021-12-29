import React from 'react';
import { colours, FundusImage } from '../../../../constants/fundi/fundi';

import './FundusDiagram.scss';

interface props {
    img: FundusImage;
    activeMarker: number;
}

export const FundusDiagram = (props: props) => {

    return <div className='fundus-diagram'>
        <img src={props.img.src} alt={props.img.alt} />
        <svg viewBox="0 0 100 100">
            {
                props.img.markers.map((v, i) => <circle 
                    key={i} 
                    cx={v.x}
                    cy={v.y}
                    r={v.radius + 1}
                    stroke={props.activeMarker === i ? '#0d47a1bb' : '#2196f3bb'}
                    strokeWidth="2"
                    fill="#00000000"
                    className="fundus-diagram-marker" />)
                    
            }
        </svg>
    </div>
}

export default FundusDiagram

