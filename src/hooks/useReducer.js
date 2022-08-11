export const formReducer = (state, event) => {
    if (event.reset) {
        return event.initialState;
    }
    return {
        ...state,
        [event.name]: event.value,
    };
};
