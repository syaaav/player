import setRequest from './setRequest'
import checkInputs from './checkInputs'

export default function handleSubmitSign(
  event,
  textLogin,
  textPassword,
  textSecondPassword,
  setErrorMessage,
  setSignUp
) {
  event.preventDefault()

  checkInputs(
    textLogin.current,
    textPassword.current,
    textSecondPassword.current,
    setErrorMessage
  )

  if (
    checkInputs(
      textLogin.current,
      textPassword.current,
      textSecondPassword.current,
      setErrorMessage
    )
  ) {
    console.log('Запрос пошел')
    setRequest(textLogin.current.value, textPassword.current.value)
      .then((result) => {
        console.log('Получилось', result)
        setSignUp(true)
        console.log('Меняем стэйт')
      })
      .catch((error) => {
        console.log(error)
        if (error.password) {
          setErrorMessage(error.password[0])
        }
        if (error.username) {
          setErrorMessage(error.username[0])
        }
      })
  }
}
