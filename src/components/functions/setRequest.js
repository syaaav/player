const setRequest = async (path, login, password) => {
  const response = await fetch(`http://51.250.72.80:8090/${path}`, {
    method: 'POST',
    body: JSON.stringify({
      email: login,
      password,
      username: login,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  const res = await response.json()
  return response.ok ? res : Promise.reject(res)
}
export default setRequest
