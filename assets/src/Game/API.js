export function retrieveGame(id) {
  return fetch(`/api/game/${id}`)
  .then(res => res.json())
  .catch(err => console.log(err))
}