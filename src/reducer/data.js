import {LOAD_DATA, START, SUCCESS} from '../constants';

const defaultState = {
  data: [],
  isLoading: false
 }

export default (infoData = defaultState, action) => {
  const {type, payload} = action;
  switch (type) {
    case LOAD_DATA + START: return {...infoData, isLoading: true}
    case LOAD_DATA + SUCCESS: return {...infoData, data: payload.response.data.data, isLoading: false}
  }

  return infoData
}
