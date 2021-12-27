import React, { useState } from 'react';
import { FUNDI } from '../../../constants/fundi/fundi';

import './CheatsheetRoute.scss';
import FundusTile from './FundusTile/FundusTile';

export default function CheatsheetRoute() {
    const [tile, setTile] = useState(0);

    let fundii = Object.values(FUNDI);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let index = fundii.indexOf(e.target.value as FUNDI);
        let el = document.getElementById(`fundus-tile-${index}`);
        el.scrollIntoView();
    }

    const handleScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
        let offset = e.currentTarget.scrollTop;
        let pageHeight = e.currentTarget.scrollHeight / fundii.length;
        let section = Math.floor((offset + 0.5) / pageHeight);
        if (section !== tile) {
            setTile(section);
            (document.getElementById("cheatsheet-selector") as HTMLSelectElement).value = fundii[section];
        }
    }

    return <>
        <div className='cheatsheet-select'>
            <select id="cheatsheet-selector" onChange={handleChange}>
                {fundii.map((v, i) => <option key={i}>{v}</option>)}
            </select>
        </div>

        <div id="cheatsheet-route" onScroll={handleScroll}>
            {fundii.map((v, i) => <FundusTile key={i} id={i} fundus={v} />)}
        </div>
    </>
}