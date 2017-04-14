export function retrieveGame(id) {
  return fetch(`/api/game/${id}`)
  .then(res => res.json())
  .catch(err => console.log(err))
}

export function postQuestion(game, question) {
  const body = {
    game: game,
    question: question,
    answer: null,
    note: null
  }

  const POST = { 
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify(body)
  };

  return fetch(`/api/game/${game}/createQ`, POST)
  .then(res => res.json())
  .catch(err => {console.log(err)})
}