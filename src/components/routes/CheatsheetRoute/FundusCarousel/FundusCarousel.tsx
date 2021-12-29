import React, { useEffect, useState } from 'react'
import "./FundusCarousel.scss"

interface props {
    children: React.ReactNode[];
    setIndex: (index: number) => void;
    index: number; 
}

export default function FundusCarousel(props: props) {

    const jumpToDot = (dot: number) => {
        let carousel = document.getElementById("fundus-carousel");
        carousel.scrollTo({ left: calcOffset(dot, carousel, props.children.length)});
        props.setIndex(dot);
    }
    
    const onScroll = (offset: number) => {
        let carousel = document.getElementById("fundus-carousel");
        let singleWidth = carousel.scrollWidth / props.children.length;
        let newIndex = Math.floor((offset + singleWidth / 2) / singleWidth);
        if (props.index !== newIndex) {
            props.setIndex(newIndex);
        }
    }

    return <div className="fundus-carousel">
        <div id="fundus-carousel" className="fundus-carousel-body" onScroll={(e:  React.UIEvent<HTMLDivElement>) => onScroll(e.currentTarget.scrollLeft)}>
            {props.children.map((v, i) => <div id={toSlideId(i)} key={i} className="carousel-slide">
                {v}    
            </div>)}
        </div>
        <div className="fundus-carousel-dots">
            {
                props.children.map((v, i) => <svg onClick={() => jumpToDot(i)} key={i} id={toDotId(i)} className={`carousel-dot ${props.index == i ? "is-active" : ""}`} viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" />
                </svg>)
            }
        </div>
    </div>
}

const toDotId = (i: number) => `fundus-carousel-${i}-dot`;
const toSlideId = (i: number) => `fundus-carousel-${i}-slide`;
const calcOffset = (i: number, carousel: HTMLElement, noElements: number) => {
    let singleWidth = carousel.scrollWidth / noElements;
    return singleWidth * i;
}