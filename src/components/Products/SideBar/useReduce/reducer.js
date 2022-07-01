import { category, color, size, material, price } from './constants';

export const initState = {
    [category]: [],
    [color]: [],
    [size]: [],
    [material]: [],
    [price]: [],
};

const reducer = (state, action) => {
    let newState;
    let newChildState;
    console.log('>>> Action:', action);
    console.log('>>> Prev:', state);
    switch (action.typeState) {
        case category:
            newChildState = state.category;
            const isSelectedCategory = newChildState.includes(action.payload);
            if (isSelectedCategory) {
                newChildState = newChildState.filter((item) => item !== action.payload);
                newState = {
                    ...state,
                    category: newChildState,
                };
            } else {
                newState = {
                    ...state,
                    category: [...newChildState, action.payload],
                };
            }
            break;
        case color:
            newChildState = state.color;
            const isSelectedColor = newChildState.includes(action.payload);
            if (isSelectedColor) {
                newChildState = newChildState.filter((item) => item !== action.payload);
                newState = {
                    ...state,
                    color: newChildState,
                };
            } else {
                newState = {
                    ...state,
                    color: [...newChildState, action.payload],
                };
            }
            break;
        case size:
            newChildState = state.size;
            const isSelectedSize = newChildState.includes(action.payload);
            if (isSelectedSize) {
                newChildState = newChildState.filter((item) => item !== action.payload);
                newState = {
                    ...state,
                    size: newChildState,
                };
            } else {
                newState = {
                    ...state,
                    size: [...state.size, action.payload],
                };
            }
            break;
        case material:
            newChildState = state.material;
            const isSelectedMaterial = newChildState.includes(action.payload);
            if (isSelectedMaterial) {
                newChildState = newChildState.filter((item) => item !== action.payload);
                newState = {
                    ...state,
                    material: newChildState,
                };
            } else {
                newState = {
                    ...state,
                    material: [...state.material, action.payload],
                };
            }
            break;
        case price:
            newChildState = state.price;
            let isSelectedPrice = newChildState.includes(action.payload);
            if (isSelectedPrice) {
                newChildState = newChildState.filter((item) => item !== action.payload);
                newState = {
                    ...state,
                    price: newChildState,
                };
            } else {
                newState = {
                    ...state,
                    price: [...state.price, action.payload],
                };
            }
            break;
        default:
            throw new Error('Invalid type state!');
    }
    console.log('>>> Next:', newState);

    return newState;
};

export default reducer;
