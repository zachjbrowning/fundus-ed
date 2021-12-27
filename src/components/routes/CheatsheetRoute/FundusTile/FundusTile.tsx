import React, { useState } from 'react';

import './FundusTile.scss';
import { FUNDI } from "../../../../constants/fundi/fundi";
import { useFundiConfig } from '../../../../constants/fundi/useFundiConfig';
import FundusMore from './FundusMore';

interface props {
    fundus: FUNDI,
    id: number
}

export default function FundusTile(props: props) {
    const [isOpen, setIsOpen] = useState(false)
    let config = useFundiConfig(props.fundus)

    return <div id={`fundus-tile-${props.id}`} className="fundus-tile">
        <div className="fundus-tile-title">
            <h1 className="is-primary">{config.name}</h1>
        </div>
        <div className="fundus-tile-img">
            <img src={config.img.src} alt={config.img.alt} />
        </div>
        <div className="fundus-tile-more">
            <button onClick={() => setIsOpen(true)} className="button is-primary">Read more</button>
        </div>
        {
            isOpen && <FundusMore onClose={() => setIsOpen(false)} config={config} />
        }
    </div>
}