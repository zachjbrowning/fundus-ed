import { fundusState as F } from "../types"
import { FUNDI } from "../../constants/fundi/fundi";

const initialState: FUNDI = FUNDI.normal;


export const fundusReducer = (state: FUNDI = initialState, action: any) => {
    switch (action.type) {
        case F.SET_FUNDUS:
            return action.fundus;
        default:
            return state;
    }
}