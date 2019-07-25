import { RECEIVE_TECHNOLOGY_ITEMS } from '../actions/technologyItems';

/**
 * Reducer for the technology items
 */
export default function technologyItems(state = {}, action) {
  switch (action.type) {
    case RECEIVE_TECHNOLOGY_ITEMS:
      return {
        ...state,
        ...action.technologyItems
      };
    default:
      return state;
  }
};
