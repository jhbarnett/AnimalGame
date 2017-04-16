export function createGame(data) {
  const POST = { 
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify(data)
  };

  return fetch(`/api/games`, POST)
  .then(res => res.json())
}