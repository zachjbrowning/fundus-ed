import { FundiConfig } from "./fundi";

// Import any images that we want to use form the static folder
import normal1 from "./images/normal-1.jpg"
import pap1 from "./images/papilloedema-1.png"
import pap2 from "./images/papilloedema-2.png"
import ret1 from "./images/hypertensive-retinopathy-1.png"

export const normalConfig: FundiConfig = {
    name: "normal eye",
    imgs: [
        {
            src: normal1,
            alt: "nomral fundus",
            description: "This is a normal eye homie, nothin to see here",
            markers: [
                {
                    x: 50,
                    y: 50,
                    radius: 0,
                    description: "haha uhh the center of the image"
                },
                {
                    x: 82,
                    y: 50,
                    radius: 4,
                    description: "some weird thing on the side"
                }
            ]
        }
    ],
    management: "not necessary",
    overview: "Normal eyes pretty much like every other eye you've ever seen to be honest"
}

export const papConfig: FundiConfig = {
    name: "Papilloedema",
    imgs: [
        {
            src: pap1,
            alt: "pap fundus",
            description: "*speaks russian*",
            markers: [
                {
                    x: 20,
                    y: 20,
                    radius: 4,
                    description: "cheees gromit"
                },
                {
                    x: 35,
                    y: 62,
                    radius: 0,
                    description: "gorgonzola"
                },
                {
                    x: 88,
                    y: 65,
                    radius: 7,
                    description: "blue"
                }
            ]
        },
        {
            src: pap2,
            alt: "pap fundus",
            description: "Oh hell no",
            markers: [
                {
                    x: 40,
                    y: 80,
                    radius: 0,
                    description: "eshay"
                },
                {
                    x: 20,
                    y: 20,
                    radius: 0,
                    description: "brah"
                },
                {
                    x: 50,
                    y: 10,
                    radius: 5,
                    description: "steel ya freshies"
                }
            ]
        }
    ],
    management: "eat a smoked oyster",
    overview: "Think the lungs of a smoker, but the eyes. Bit red round the edges but nothing too terrible."
}

export const retConfig: FundiConfig = {
    name: "Hypertensive Retinopathy",
    imgs: [
        {
            src: ret1,
            alt: "worse fundus",
            description: "\'AAADDRIAAAANNNNNNN\'",
            markers: []
        }
    ],
    management: "see a chiropractor",
    overview: "I reckon jaundice falls under the worse eye category. Essentially if aint the colour it shouldn't be, something aint right."
}