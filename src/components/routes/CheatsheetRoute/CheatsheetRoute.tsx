import React, { useState } from 'react';
import { FUNDI } from '../../../constants/fundi/fundi';

import './CheatsheetRoute.scss';
import FundusPage from './FundusPage/FundusPage';
import FundusTile from './FundusTile/FundusTile';

export default function CheatsheetRoute() {
    const [openFundus, setOpenFundus] = useState(-1);

    let fundi = Object.values(FUNDI);


    return <>
        <div id="cheatsheet-route" >
            {fundi.map((v, i) => <FundusTile  openPage={() => setOpenFundus(i)} key={i} id={i} fundus={v} />)}
        </div>
        { (openFundus !== -1) && <FundusPage isOpen={true} fundus={fundi[openFundus]} closePage={() => setOpenFundus(-1)} />}
    </>
}