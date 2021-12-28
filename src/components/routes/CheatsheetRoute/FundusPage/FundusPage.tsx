import React from 'react';
import { useSelector } from 'react-redux';
import { useFundiConfig } from '../../../../constants/fundi/useFundiConfig';
import { RootState } from '../../../../redux/reducers';
import Carousel from '../../../shared/Carousel/Carousel';
import Tabs, { TabProps } from '../../../shared/Tabs/Tabs';

import './FundusPage.scss';

interface props {
    closePage: () => void;
}

export const FundusPage = (props: props) => {
    const fundus = useSelector((state: RootState) => state.fundus);
    const config = useFundiConfig(fundus);


    let tabs: TabProps[] = [
        {
            title: "Description",
            component: <p>{config.description}</p>
        },
        {
            title: "Management",
            component: <p>{config.management}</p>
        }
    ]

    return <>
        <div className="fundus-page">

            <div className="fundus-page-header">
                <h3>The fundus of an eye that is</h3>
                <h1 className="header is-primary">{config.name}</h1>
            </div>

            <div className="fundus-page-images">
                <Carousel>
                    {config.imgs.map((v, i) => <img key={i} src={v.src} alt={v.alt} />)}
                </Carousel>
            </div>

            <div className="fundus-page-info">
                <Tabs tabs={tabs}/>
            </div>
        </div>
        <svg onClick={props.closePage} className="fundus-page-closer" viewBox="0 0 14 14">
            <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" />
        </svg>
    </> 
}

export default FundusPage