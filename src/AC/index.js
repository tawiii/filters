import * as constants from '../constants';
import axios from 'axios';


export function loadData() {
  return (dispatch) => {
    dispatch({
      type: constants.LOAD_DATA + constants.START
    });

    axios.get(`http://demo4452328.mockable.io/property`)

    .then(response => dispatch({
      type: constants.LOAD_DATA + constants.SUCCESS,
      payload: { response }
    }))
    .catch(error => {
      dispatch({
        type: constants.LOAD_DATA + constants.FAIL,
        payload: { error }
      })
    })
  }
}

export function getRooms(stateRooms) {
  return {
    type: constants.FILTER_ROOMS,
    payload: { stateRooms }
  }
}

export function getPrice(statePrice) {
  return {
    type: constants.FILTER_PRICE,
    payload: { statePrice }
  }
}

export function getStars(rate) {
  return {
    type: constants.FILTER_STARS,
    payload: { rate }
  }
}

export function getCurrency(currencyValue) {
  return (dispatch) => {
    dispatch({
      type: constants.FILTER_CURRENCY + constants.START
    });

    axios.get(`https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`)

    .then(response => dispatch({
      type: constants.FILTER_CURRENCY + constants.SUCCESS,
      payload: { response, currencyValue }
    }))
    .catch(error => {
      dispatch({
        type: constants.FILTER_CURRENCY + constants.FAIL,
        payload: { error }
      })
    })
  }
}
