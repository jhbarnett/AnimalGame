export const loginUser = (user) => {
  const body = {
    username: user.name,
    password: user.password
  }

  return fetch('/api/user', {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify(body)
  }).then(res => res.json())
}

export const getAllUsers = () => {
  return fetch('/api/users')
    .then(res => res.json())
}



