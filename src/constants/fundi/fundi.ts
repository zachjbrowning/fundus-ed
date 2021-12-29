import { normalConfig, papConfig, retConfig } from "./configs";

export const colours = [
    '#ffca3a',
    '#8ac926',
    '#1982c4',
    '#6a4c93',
    '#78E0DC',
    '#B084CC'
]

export enum FUNDI {
    normal = "NORMAL",
    pap = "PAP",
    ret = "RET",
}

export interface FundusImage {
    src: string;
    alt: string;
    description: string;
    markers: ImageMarker[];
}

export interface ImageMarker {
    x: number;
    y: number;
    description: string;
    radius: number;
}

export interface FundiConfig {
    name: string;
    imgs: FundusImage[];
    management: string;
    overview: string;
}

export const fundiConfigs: {
    [F in FUNDI] : FundiConfig
} = {
    NORMAL: normalConfig,
    PAP: papConfig,
    RET: retConfig
}


