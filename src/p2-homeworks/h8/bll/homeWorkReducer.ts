import {UserType} from "../HW8";

type ActionType = {
    type: "sort" | "check",
    payload: "up" | "down" | 18
};

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case "sort": {
            // need to fix
            if (action.payload === "up") {
                return [...state].sort((a, b) => a.name > b.name ? 1 : -1);
            } else if (action.payload === "down") {
                return [...state].sort((a, b) => a.name < b.name ? 1 : -1);
            }
            return state;
        }
        case "check": {
            // need to fix
            return state.filter(s => s.age > action.payload)
        }
        default:
            return state
    }
}