import TYPE from '../actionTypes';

export const toggleMenu = (payload) => {
  return { type: TYPE.TOGGLE_MENU, payload }
}