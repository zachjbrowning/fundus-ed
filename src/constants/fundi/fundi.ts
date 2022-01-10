import { normalConfig, papConfig, retConfig } from "./configs";

// STEP 2: Give our Fundus a nickname so the code has something a name to reference
export enum FUNDI {
    normal = "NORMAL",
    pap = "PAP",
    ret = "RET",
}

// STEP 3: Register our configuration - essentially telling the code that this config exists, 
// and it correlates to this nickname
export const fundiConfigs: {
    [F in FUNDI] : FundiConfig
} = {
    NORMAL: normalConfig,
    PAP: papConfig,
    RET: retConfig
}

/*
    BELOW HERE, WE HAVE DEFINED THE TYPE OF OUR DIFFERENT OBJECTS
*/
// This defines how we can describe the configuration for a whole fundus
export type FundiConfig = {
    name: string; // Title of the fundus tile
    imgs: FundusImage[]; // List of fundus images
    management: string; // Sentence describing the management.
    overview: string; // Sentence giving this fundus overview
}

// This defines how we can describe an image
export type FundusImage = {
    src: string; // Link to the image itself
    alt: string; // Quick two or three word description of the image incase it doesn't load
    description: string; // This is what shows in the description tile when you swipe through the images
    markers: ImageMarker[]; // List of image markers to overlay the image
}

// This defines how we can describe a marker for an image. 
// I think this might take a bit of guess and check tring to put markers in the right place.
// Imagine the image kind of like a cartesian plane:
// (0,0) ----------------------> (100, 0)
//  |
//  |
//  |
//  |
//  |
//  |
// \/
// (0, 100)
export type ImageMarker = {
    x: number; // X position of the marker
    y: number; // Y position of the marker
    description: string; // Description of what is at the marker
    radius: number; // the radius of the marker. If a dot, put as zero.
}


// I was playing around with having the markers different colours... ignore this
export const colours = [
    '#ffca3a',
    '#8ac926',
    '#1982c4',
    '#6a4c93',
    '#78E0DC',
    '#B084CC'
]


