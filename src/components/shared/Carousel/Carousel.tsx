import React, { useEffect, useState } from 'react'
import "./Carousel.scss"

export default function Carousel(props: { children: React.ReactNode[]}) {
    const [currentDot, setCurrentDot] = useState(0);

    const jumpToDot = (dot: number) => {
        let carousel = document.getElementById("carousel");
        carousel.scrollTo({ left: calcOffset(dot, carousel, props.children.length)});
        setCurrentDot(dot);
    }
    
    const onScroll = (offset: number) => {
        let carousel = document.getElementById("carousel");
        let index = Math.floor((offset + carousel.scrollWidth / 2) / carousel.scrollWidth);
        if (currentDot !== index) {
            setCurrentDot(index);
        }
    }

    return <div className="carousel">
        <div id="carousel" className="carousel-body" onScroll={(e:  React.UIEvent<HTMLDivElement>) => onScroll(e.currentTarget.scrollLeft)}>
            {props.children.map((v, i) => <div id={toSlideId(i)} key={i} className="carousel-slide">
                {v}    
            </div>)}
        </div>
        <div className="carousel-dots">
            {
                props.children.map((v, i) => <svg onClick={() => jumpToDot(i)} key={i} id={toDotId(i)} className={`carousel-dot ${currentDot == i ? "is-active" : ""}`} viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" />
                </svg>)
            }
        </div>
    </div>
}

const toDotId = (i: number) => `carousel-${i}-dot`;
const toSlideId = (i: number) => `carousel-${i}-slide`;
const calcOffset = (i: number, carousel: HTMLElement, noElements: number) => {
    let singleWidth = carousel.scrollWidth / noElements;
    return singleWidth * i;
}
const calcOffsets = (carousel: HTMLElement, noElements: number) => {
    let singleWidth = carousel.scrollWidth / noElements;
    let offsetArray: number[] = new Array();
    for (let i = 0; i < noElements; i++) offsetArray.push(singleWidth * i);
    return offsetArray;
}