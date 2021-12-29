import { Guid } from 'guid-typescript';
import React, { useEffect, useState } from 'react'
import DropdownArrow from '../icons/DropdownArrow/DropdownArrow';

import "./Accordion.scss";

export default function Accordion(props: { title: string, children: React.ReactNode[] | React.ReactNode, defaultOpen?: boolean}) {
    const contentGuid = Guid.create()
    const [isOpen, setIsOpen] = useState(false)
    let timeout: ReturnType<typeof setTimeout>;
    
    useEffect(() => {
        toggler(props.defaultOpen ?? false);

        return () => clearTimeout(timeout);
    }, [])

    const toggler = (willBeOpen: boolean) => {
        const content = document.getElementById(contentGuid.toString());
        clearTimeout(timeout);
        if (willBeOpen) {
            content.style.display = null;
            content.style.height = content.scrollHeight + "px";
            timeout = setTimeout(() => {
                content.style.height = null;
            }, 300)
        } else {
            content.style.height = content.scrollHeight + "px";
            
            setTimeout(() => {
                content.style.height = "0px";
            }, 1)
        }
        setIsOpen(willBeOpen);
    } 

    return <div tabIndex={1} className={`accordion ${isOpen ? "is-open" : ""}`}>
        <div onClick={() => toggler(!isOpen)} className="accordion-header">
            <h1>{props.title}</h1><DropdownArrow />
        </div>
        <div id={contentGuid.toString()}  className="accordion-content" style={{height:"0px"}}>
            <div className="accordion-body">
                {props.children}
            </div>
        </div>
    </div>
}
