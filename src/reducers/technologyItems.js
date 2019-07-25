import {
  RECEIVE_TECHNOLOGY_ITEMS,
  TOGGLE_SELECTION
} from '../actions/technologyItems';

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
    case TOGGLE_SELECTION:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          isSelected: !state[action.id].isSelected
        }
      };
    default:
      return state;
  }
};
