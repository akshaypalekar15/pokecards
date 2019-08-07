const INITIALSTATE = {
    searchedPokeCards: null,
}

const rootReducer = (state = INITIALSTATE, action) => {
    switch (action.type) {
        case 'POKECARDS_FETCH_SUCCEESS':
            return {
                ...state,
                searchedPokeCards: action.cards
            }

        case 'POKECARDS_FETCH_FAILED':
            return {
                ...state,
            }

        default:
            return { ...state };
    }
}

export default rootReducer;