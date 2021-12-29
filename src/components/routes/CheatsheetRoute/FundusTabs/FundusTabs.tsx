import React, { ReactElement, useState } from 'react';
import { FundusImage } from '../../../../constants/fundi/fundi';

import './FundusTabs.scss';

interface TabProps {
    management: string;
    overview: string;
    img: FundusImage;
    setHover: (index: number) => void;
}

type Tab = {
    title: string;
    component: React.ReactNode;
}

export const FundusTabs = (props: TabProps) => {
    const [current, setCurrent] = useState(0);

    const tabs: Tab[] = [
        {
            title: "Description",
            component: <div className="fundus-tabs-description">
                <ul>
                    {props.img.markers.map((v, i) => (
                        <li key={i} onMouseEnter={() => props.setHover(i)} onMouseLeave={() => props.setHover(-1)}>
                            {v.description}
                        </li>))}
                </ul>
                <p>{props.img.description}</p>
            </div>
        },
        {
            title: "Overview",
            component: <p>{props.overview}</p>

        },
        {
            title: "Management",
            component: <p>{props.management}</p>

        }
    ]

    return <div className="fundus-tabs">
        <div className="tabs is-boxed">
            <ul>
                {tabs.map((v, i) => <li key={i} className={current === i ? "is-active" : ""}>
                    <a onClick={() => setCurrent(i)}>{v.title}</a>
                </li>)}
            </ul>
        </div>  
        <div>
            {tabs[current].component}
        </div>
    </div>
}

export default FundusTabs