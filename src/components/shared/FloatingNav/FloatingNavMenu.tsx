import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FUNDI } from '../../../constants/fundi/fundi';
import { routes } from '../../../constants/routes';
import { setCurrentFundus } from '../../../redux/actions/fundusActions';
import { RootState } from '../../../redux/reducers';

import './FloatingNavMenu.scss';

interface props {
    quadrant: number;
    setClose: () => void;
}

export const FloatingNavMenu = (props: props) => {
    const fundus = useSelector((state: RootState) => state.fundus)
    const dispatch = useDispatch();
    let navigate = useNavigate();
    let fundii = Object.values(FUNDI);
    
    useEffect(() => {
        (document.getElementById("cheatsheet-selector") as HTMLSelectElement).value = fundus;
    }, [fundus])

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setCurrentFundus(e.target.value as FUNDI));
        props.setClose();
    }


    return <div id="floating-nav-menu" className={`quadrant-${props.quadrant}`}>
        <button onClick={() => navigate(routes.LANDING_ROUTE)} className="button is-primary">Home</button>

        <select id="cheatsheet-selector" onChange={handleChange}>
            {fundii.map((v, i) => <option key={i}>{v}</option>)}
        </select>
    
    </div>
}

export default FloatingNavMenu