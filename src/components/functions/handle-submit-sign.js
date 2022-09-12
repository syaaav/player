import setRequest from './setRequest'
import checkInputs from './check-inputs-signup'

export default function handleSubmitSign(
  event,
  textLogin,
  textPassword,
  textSecondPassword,
  setErrorMessage,
  setSignUp
) {
  const path = 'user/signup/'
  event.preventDefault()

  if (
    checkInputs(
      textLogin.current,
      textPassword.current,
      textSecondPassword.current,
      setErrorMessage
    )
  ) {
    console.log('Запрос пошел')
    setRequest(path, textLogin.current.value, textPassword.current.value)
      .then(() => {
        setSignUp(true)
      })
      .catch((error) => {
        if (error.password) {
          setErrorMessage(error.password[0])
        }
        if (error.email) {
          setErrorMessage(error.email[0])
        }
      })
  }
}
