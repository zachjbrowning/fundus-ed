import { badConfig, deadConfig, normalConfig, worseConfig } from "./configs";

export enum FUNDI {
    normal = "NORMAL",
    bad = "BAD",
    worse = "WORSE",
    dead = "DEAD"
}

interface img {
    src: string;
    alt: string;
}

export interface FundiConfig {
    name: string;
    img: img;
    management: string;
}

export const fundiConfigs: {
    [F in FUNDI] : FundiConfig
} = {
    NORMAL: normalConfig,
    BAD: badConfig,
    WORSE: worseConfig,
    DEAD: deadConfig
}


