export default function handleSubmitLogin(event, textLogin, textPassword) {
  event.preventDefault()
  console.log(textLogin.current.value)
  console.log(textPassword.current.value)
  console.log('Отправка!')
  fetch('http://51.250.72.80:8090/user/token/', {
    method: 'POST',
    body: JSON.stringify({
      email: textLogin.current.value,
      password: textPassword.current.value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // setSongs(data)
      console.log(data)
    })
}
