export const openMenu = () => {
  return { type: 'OPEN_MENU' }
}

export const closeMenu = (payload) => {
  return { type: 'CLOSE_MENU', payload }
}

// export const decrement = () => {
//   return { type: 'DECREMENT' }
// }

// export const decrementAsync = () => {
//   return { type: 'DECREMENT_ASYNC' }
// }