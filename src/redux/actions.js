import { SET_CURRENT_GAME } from "./actionTypes";

export const setCurrentGame = (index) => ({
    type: SET_CURRENT_GAME,
    payload: index,
});
