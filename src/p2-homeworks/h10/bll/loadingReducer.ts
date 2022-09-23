const initState: initStateType = {
    isLoading: false
}

type initStateType = {
    isLoading: boolean
}
export const loadingReducer = (state: initStateType = initState, action: LoadingACType): initStateType => { // fix any
    switch (action.type) {
        case "CHANGE-LOADING": {
            return {isLoading: !state.isLoading};
        }
        default:
            return state;
    }
}

type LoadingACType = ReturnType<typeof loadingAC>;
export const loadingAC = () => ({type: "CHANGE-LOADING"} as const) // fix any
