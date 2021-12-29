import React from 'react';
import { useNavigate } from "react-router-dom";
import { routes } from '../../../constants/routes';
import './LandingRoute.scss';
import LandingTile, { TileProps } from './LandingTile/LandingTile';
import TestImg from "../../../static/fundi/normal-1.jpg"

const tiles: TileProps[] = [
    {
        title: "Fundus cheatsheet",
        msg: "Look at eyes n shid",
        img: {
            src: TestImg,
            alt: "img of an eye"
        },
        route: routes.CHEATSHEET_ROUTE
    },
    {
        title: "How to use the tool",
        msg: "First time using this tool? Learn how to use it",
        img: {
            src: TestImg,
            alt: "img of a question mark"
        },
        route: routes.TUTORIAL_ROUTE
    },
    {
        title: "Learn more",
        msg: "Further education and tools",
        img: {
            src: TestImg,
            alt: "img of a book"
        },
        route: routes.MORE_ROUTE
    },
]

export default function LandingRoute() {
    return <div className="landing-route">
        <div className="landing-route-title">
            <h1 className="header is-primary">Welcome tooo Fun-Dus</h1>
        </div>
        <hr />
        <div className="landing-route-tiles">
            {tiles.map((v, i) => <LandingTile key={i} title={v.title} msg={v.msg} img={v.img} route={v.route} />)}
        </div>
    </div>
}