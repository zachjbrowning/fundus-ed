import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FUNDI } from '../../../../constants/fundi/fundi';
import { useFundiConfig } from '../../../../constants/fundi/useFundiConfig';
import { RootState } from '../../../../redux/reducers';
import FundusTabs from '../FundusTabs/FundusTabs';

import './FundusPage.scss';
import FundusCarousel from '../FundusCarousel/FundusCarousel';
import FundusDiagram from '../FundusImage/FundusDiagram';
import Accordion from '../../../shared/Accordion/Accordion';

interface props {
    closePage: () => void;
    fundus: FUNDI;
    isOpen: boolean;
}

export const FundusPage = (props: props) => {
    const config = useFundiConfig(props.fundus);
    // Current image
    const [currentIndex, setCurrentIndex] = useState(0);
    // Current marker being viewed
    const [currentHover, setCurrentHover] = useState(-1);

    return <>
        <div className={`fundus-page ${props.isOpen ? "is-open" : ""}`}>

            <div className="fundus-page-header">
                <h3>The fundus of an eye that is</h3>
                <h1 className="header is-primary">{config.name}</h1>
            </div>

            <div className="fundus-page-images">
                <FundusCarousel index={currentIndex} setIndex={setCurrentIndex}>
                    {config.imgs.map((v, i) => <FundusDiagram key={i} img={v} activeMarker={currentHover}/>)}
                </FundusCarousel>
            </div>

            <div className="fundus-page-info">
                <Accordion title={'Image Annotations'} defaultOpen={true}>
                    <ul>
                        {config.imgs[currentIndex].markers.map((v, i) => (
                            <li key={i} onMouseEnter={() => setCurrentHover(i)} onMouseLeave={() => setCurrentHover(-1)}>
                                {v.description}
                            </li>))}
                    </ul>
                    <p>{config.imgs[currentIndex].description}</p>
                </Accordion>
                <Accordion title={'Overview'}>
                    <p>
                        {config.overview}
                    </p>
                </Accordion>
                <Accordion title={'Management'}>
                    <p>
                        {config.management}
                    </p>
                </Accordion>
            </div>
        </div>
        {
            props.isOpen && <svg onClick={props.closePage} className="fundus-page-closer" viewBox="0 0 14 14">
                <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" />
            </svg>
        }
        
    </> 
}

export default FundusPage