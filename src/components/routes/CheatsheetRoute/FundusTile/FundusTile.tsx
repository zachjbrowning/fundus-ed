import React, { useState } from 'react';

import './FundusTile.scss';
import { FUNDI } from "../../../../constants/fundi/fundi";
import { useFundiConfig } from '../../../../constants/fundi/useFundiConfig';
import FundusPage from '../FundusPage/FundusPage';
import Carousel from '../../../shared/Carousel/Carousel';

interface props {
    fundus: FUNDI;
    id: number;
    openPage: () => void;
}

export default function FundusTile(props: props) {
    let config = useFundiConfig(props.fundus)

    return <div id={`fundus-tile-${props.id}`} onClick={props.openPage} className="fundus-tile">
        <div className="fundus-tile-header">
            <h1 className="header is-primary">
                {config.name}
            </h1>
        </div>
        <div className="fundus-tile-carousel">
            <Carousel > 
                {config.imgs.map((v, i) => <img key={i} src={v.src} alt={v.alt} />)}
            </Carousel>
        </div>
        <div className="fundus-tile-read-more">
            <button className="button">Read more</button>
        </div>
    </div>
}