import { FundiConfig } from "./fundi";
import NormalImg from "../../static/fundi/NORMAL.jpg"
import BadImg from "../../static/fundi/BAD.jpg"
import WorseImg from "../../static/fundi/WORSE.jpg"
import DeadImg from "../../static/fundi/DEAD.jpg"

export const normalConfig: FundiConfig = {
    name: "normal eye",
    img: {
        src: NormalImg,
        alt: "nomral fundus"
    },
    management: "not necessary"
}

export const badConfig: FundiConfig = {
    name: "bad eye",
    img: {
        src: BadImg,
        alt: "bad fundus"
    },
    management: "eat a smoked oyster"
}

export const worseConfig: FundiConfig = {
    name: "worse eye",
    img: {
        src: WorseImg,
        alt: "worse fundus"
    },
    management: "see a chiropractor"
}

export const deadConfig: FundiConfig = {
    name: "dead eye",
    img: {
        src: DeadImg,
        alt: "dead fundus"
    },
    management: "Start digging ya grave"
}