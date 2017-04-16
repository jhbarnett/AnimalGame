export function getOpenGames(user) {
  return fetch(`/api/games/${user}`)
    .then(res => res.json())
    .catch(err => {console.log(err)})
}