export const createUser = (name, password) => {
  return {type: 'CREATE_USER', payload: {name. password}}
}