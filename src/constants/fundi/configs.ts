import { FundiConfig } from "./fundi";
import normal1 from "../../static/fundi/normal-1.jpg"
import pap1 from "../../static/fundi/papilloedema-1.png"
import pap2 from "../../static/fundi/papilloedema-2.png"
import ret1 from "../../static/fundi/hypertensive-retinopathy-1.png"
import NormalImg from "../../static/fundi/NORMAL.jpg"
import BadImg from "../../static/fundi/BAD.jpg"
import WorseImg from "../../static/fundi/WORSE.jpg"
import DeadImg from "../../static/fundi/DEAD.jpg"

export const normalConfig: FundiConfig = {
    name: "normal eye",
    imgs: [{
        src: normal1,
        alt: "nomral fundus"
    }],
    management: "not necessary",
    description: "Normal eyes pretty much like every other eye you've ever seen to be honest"
}

export const papConfig: FundiConfig = {
    name: "Papilloedema",
    imgs: [
        {
            src: pap1,
            alt: "pap fundus"
        },
        {
            src: pap2,
            alt: "pap fundus"
        }
    ],
    management: "eat a smoked oyster",
    description: "Think the lungs of a smoker, but the eyes. Bit red round the edges but nothing too terrible."
}

export const retConfig: FundiConfig = {
    name: "Hypertensive Retinopathy",
    imgs: [
        {
            src: ret1,
            alt: "worse fundus"
        }
    ],
    management: "see a chiropractor",
    description: "I reckon jaundice falls under the worse eye category. Essentially if aint the colour it shouldn't be, something aint right."
}

export const deadConfig: FundiConfig = {
    name: "dead eye",
    imgs: [
        {
            src: DeadImg,
            alt: "dead fundus"
        },
        {
            src: WorseImg,
            alt: "also dead?"
        },
        {
            src: BadImg,
            alt: "also dead?"
        },
        {
            src: NormalImg,
            alt: "also dead?"
        }
    ],
    management: "Start digging ya grave",
    description: "If you can't diagnose this, you're a terrible doctor. They're literally dead like comeion> IM adding more words because I want it to overflo pleeease"
}