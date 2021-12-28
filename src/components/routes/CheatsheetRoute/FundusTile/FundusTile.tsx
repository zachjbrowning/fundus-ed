import React, { useState } from 'react';

import './FundusTile.scss';
import { FUNDI } from "../../../../constants/fundi/fundi";
import { useFundiConfig } from '../../../../constants/fundi/useFundiConfig';
import Carousel from '../../../shared/Carousel/Carousel';

interface props {
    fundus: FUNDI;
    id: number;
    openPage: () => void;
}

export default function FundusTile(props: props) {
    let config = useFundiConfig(props.fundus)

    return <div id={`fundus-tile-${props.id}`} onClick={props.openPage} className="fundus-tile">
        <div className="fundus-tile-title">
            <h1 className="is-primary">{config.name}</h1>
        </div>
        <div className="fundus-tile-img">
            <Carousel>  
                {config.imgs.map((v, i) => <div key={i}><img src={v.src} alt={v.alt} /></div>)}
            </Carousel>
        </div>
        <div className="fundus-tile-info">
            <div>
                <p>
                    {config.description}
                </p>
            </div>
            <div>
                <button className="button is-primary">Read more</button>
            </div>
        </div>
    </div>
}