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
    console.log('Запрос пошел!')
    setRequest(path, textLogin.current.value, textPassword.current.value)
      .then((result) => {
        console.log('Получилось', result)
        setLogIn(true)
        console.log('Меняем стэйт')
      })
      .catch((error) => {
        console.log(error)
        if (error.detail) {
          setErrorMessage(error.detail)
        }
      })
  }
}
