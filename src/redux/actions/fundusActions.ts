import { FUNDI } from "../../constants/fundi/fundi";
import { fundusState as F } from "../types";


export const setCurrentFundus = (fundus: FUNDI) => ({
    type: F.SET_FUNDUS,
    fundus: fundus
});