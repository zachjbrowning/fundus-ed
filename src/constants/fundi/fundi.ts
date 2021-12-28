import { deadConfig, normalConfig, papConfig, retConfig } from "./configs";

export enum FUNDI {
    normal = "NORMAL",
    pap = "PAP",
    ret = "RET",
    dead = "DEAD"
}

export interface img {
    src: string;
    alt: string;
}

export interface FundiConfig {
    name: string;
    imgs: img[];
    management: string;
    description: string;
}

export const fundiConfigs: {
    [F in FUNDI] : FundiConfig
} = {
    NORMAL: normalConfig,
    PAP: papConfig,
    RET: retConfig,
    DEAD: deadConfig
}


