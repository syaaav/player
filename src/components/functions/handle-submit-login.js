import setRequest from './setRequest'
import checkInputs from './check-inputs-login'

export default function handleSubmitLogin(
  event,
  textLogin,
  textPassword,
  setErrorMessage,
  setLogIn
) {
  const path = 'user/token/'
  event.preventDefault()

  if (checkInputs(textLogin.current, textPassword.current, setErrorMessage)) {
    setRequest(path, textLogin.current.value, textPassword.current.value)
      .then((result) => {
        setLogIn(true)
        localStorage.setItem('refresh', result.refresh)
      })
      .catch((error) => {
        if (error.detail) {
          setErrorMessage(error.detail)
        }
      })
  }
}
