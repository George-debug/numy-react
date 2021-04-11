import { SET_CURRENT_GAME } from "../actionTypes";

const setCurrentGame = (state = 0, action) => {
    switch (action.type) {
        case SET_CURRENT_GAME:
            return action.payload;

        default:
            return state;
    }
};

export default setCurrentGame;
