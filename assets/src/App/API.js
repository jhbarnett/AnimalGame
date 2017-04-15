export const loginUser = (user) => {
  const body = {
    username: user.name,
    password: user.password
  }
  
  return fetch('/api/users', {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify(body)
  })
}