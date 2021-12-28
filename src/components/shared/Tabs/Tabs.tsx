import React, { ReactElement, useState } from 'react';

import './Tabs.scss';

export interface TabProps {
    title: string;
    component: React.ReactNode;
}

export const Tabs = (props: { tabs: TabProps[] }) => {
    const [current, setCurrent] = useState(0);

    return <div>
        <div className="tabs is-boxed">
            <ul>
                {props.tabs.map((v, i) => <li key={i} className={current === i ? "is-active" : ""}>
                    <a onClick={() => setCurrent(i)}>{v.title}</a>
                </li>)}
            </ul>
        </div>  
        <div>
            {props.tabs[current].component}
        </div>
    </div>
}

export default Tabs