// eslint-disable-next-line consistent-return
export default function checkInputs(login, password, setErrorMessage) {
  const minLengthPassword = 8

  if (!login.value || !password.value) {
    setErrorMessage('Заполните все поля')
  } else if (password.length < minLengthPassword) {
    setErrorMessage('Пароль должен содержать минимум 8 символов')
  } else {
    return true
  }
}
