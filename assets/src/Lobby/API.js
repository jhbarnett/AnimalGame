export function getOpenGames(user) {
  return fetch('/api/games')
    .then(res => res.json())
    .catch(err => {console.log(err)})
}