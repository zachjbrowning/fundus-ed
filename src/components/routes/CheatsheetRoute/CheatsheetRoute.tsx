import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FUNDI } from '../../../constants/fundi/fundi';
import { setCurrentFundus } from '../../../redux/actions/fundusActions';
import { RootState } from '../../../redux/reducers';

import './CheatsheetRoute.scss';
import FundusPage from './FundusPage/FundusPage';
import FundusTile from './FundusTile/FundusTile';

export default function CheatsheetRoute() {
    const fundus = useSelector((state: RootState) => state.fundus)
    const dispatch = useDispatch();
    const [pageOpen, setPageOpen] = useState(false);

    let fundi = Object.values(FUNDI);

    useEffect(() => {
        let box = document.getElementById("cheatsheet-route");
        let tile = Math.floor((box.scrollTop + 0.5) / (box.scrollHeight / fundi.length));
        if (fundi[tile] !== fundus) {
            document.getElementById(`fundus-tile-${fundi.indexOf(fundus)}`).scrollIntoView(); 
        }
    }, [fundus])

    const handleScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
        if (open) return;
        let offset = e.currentTarget.scrollTop;
        let pageHeight = e.currentTarget.scrollHeight / fundi.length;
        let tile = fundi[Math.floor((offset + 0.5) / pageHeight)];
        if (tile !== fundus) {
            dispatch(setCurrentFundus(tile));
        }
    }

    const openPage = (i: number) => {
        if (fundi[i] !== fundus) dispatch(setCurrentFundus(fundi[i]));
        setPageOpen(true);
    }

    return <>
        <div id="cheatsheet-route" onScroll={handleScroll}>
            {fundi.map((v, i) => <FundusTile openPage={() => openPage(i)} key={i} id={i} fundus={v} />)}
        </div>
        { pageOpen && <FundusPage closePage={() => setPageOpen(false)} />}
    </>
}