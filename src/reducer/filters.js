import {FILTER_ROOMS, FILTER_PRICE, FILTER_STARS, FILTER_CURRENCY, START, SUCCESS} from '../constants';

const defaultFilters = {
  stateRooms: {},
  statePrice: {},
  rate: 0,
  currencyValue: 0,
  dataExchange: [],
  isLoading: false
}

export default (filters = defaultFilters, action) => {
  const {type, payload} = action;
  switch (type) {
    case FILTER_ROOMS: return {...filters, stateRooms: payload.stateRooms}
    case FILTER_PRICE: return {...filters, statePrice: payload.statePrice}
    case FILTER_STARS: return {...filters, rate: payload.rate}
    case FILTER_CURRENCY + START: return {...filters, isLoading: true}
    case FILTER_CURRENCY + SUCCESS: return {...filters, currencyValue: payload.currencyValue, dataExchange: payload.response.data, isLoading: false}
  }

  return filters
}
