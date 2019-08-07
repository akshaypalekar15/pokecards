import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* rootWatcherSaga() {
    yield takeLatest("POKENAME", fetchPokeCards);
}

function* fetchPokeCards(action) {
    console.log(action);
    try {
        const resp = yield call(getSearchedCards, action);
        yield put({ type: "POKECARDS_FETCH_SUCCEESS", cards: resp.data });
    } catch (e) {
        yield put({ type: "POKECARDS_FETCH_FAILED", message: e.message });
    }
}

function getSearchedCards(action) {
    return axios.get(`https://api.pokemontcg.io/v1/cards?name=${action.payload}`)
        .then((data) => {
            return data;
        })
        .catch((err) => {
            return err;
        });
}


export default rootWatcherSaga;