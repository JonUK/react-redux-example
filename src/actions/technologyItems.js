
// Constants for the action types
export const RECEIVE_TECHNOLOGY_ITEMS = 'RECEIVE_TECHNOLOGY_ITEMS';
export const TOGGLE_SELECTION = 'TOGGLE_SELECTION';

/**
 * Action creator for the action to add all the items to the store
 */
export function receiveTechnologyItems(technologyItems) {
  return {
    type: RECEIVE_TECHNOLOGY_ITEMS,
    technologyItems
  };
}

export function toggleSelection(id) {
  return {
    type: TOGGLE_SELECTION,
    id
  };
}
