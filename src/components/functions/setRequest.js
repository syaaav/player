export default function setRequest(
  login,
  password,
  setSignUp,
  setErrorMessage
) {
  fetch('http://51.250.72.80:8090/user/signup/', {
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
    .then((response) => {
      if (response.status === 201) {
        console.log('Получилось')
        setSignUp(true)
      }

      if (response.status === 400) {
        throw new Error('Пользователь с таким логином уже существует')
      }
    })
    .catch((err) => {
      setErrorMessage(`${err}`)
    })
}
