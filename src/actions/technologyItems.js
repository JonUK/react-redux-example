/**
 * Constant for the action type to add all the items to the store
 */
export const RECEIVE_TECHNOLOGY_ITEMS = 'RECEIVE_TECHNOLOGY_ITEMS';


/**
 * Action creator for the action to add all the items to the store
 */
export function receiveTechnologyItems(technologyItems) {
  return {
    type: RECEIVE_TECHNOLOGY_ITEMS,
    technologyItems
  };
}
