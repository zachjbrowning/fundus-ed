import React from 'react';
import { FundiConfig } from '../../../../constants/fundi/fundi';

import './FundusMore.scss';

interface props {
    config: FundiConfig;
    onClose: () => void;
}

export const FundusMore = (props: props) => {

    return <div className="fundus-more">
        <h1>{props.config.name}</h1>
        <div>
            <h3 className="header"><strong>Management:</strong></h3>
            <p>{props.config.management}</p>
        </div>
        <button onClick={props.onClose} className="button is-secondary">close</button>
    </div>
}

export default FundusMore