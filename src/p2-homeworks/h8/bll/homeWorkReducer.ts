import { UserType } from "../HW8";

type ActionType = {
    type: "sort" | "check";
    payload: "up" | "down" | 18;
};

export const homeWorkReducer = (
    state: UserType[],
    action: ActionType
): UserType[] => {
    // need to fix any
    switch (action.type) {
        case "sort": {
            // need to fix
            const stateCopy = [...state].sort((a, b) => {
                if (a.name > b.name) {
                    return 1;
                } else if (a.name < b.name) {
                    return -1;
                } else {
                    return 0;
                }
            });
            if (action.payload === "up") {
                return stateCopy;
            } else {
                return stateCopy.reverse();
            }
        }
        case "check": {
            // need to fix
            return state.filter((s) => s.age > action.payload);
        }
        default:
            return state;
    }
};
