import { getAllTechnologyItems } from '../data/api';
import { receiveTechnologyItems } from './technologyItems';

/**
 * Gets all the technology items async and then sets them in the store
 */
export function handleReceiveTechnologyItems() {
  return dispatch => {
    return getAllTechnologyItems()
      .then(technologyItems => {
        dispatch(receiveTechnologyItems(technologyItems));
      });
  };
}
