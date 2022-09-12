// eslint-disable-next-line consistent-return
export default function checkInputs(
  login,
  password,
  secondPassword,
  setErrorMessage
) {
  const minLengthPassword = 8

  if (!login.value || !password.value || !secondPassword.value) {
    setErrorMessage('Заполните все поля')
  } else if (password.value !== secondPassword.value) {
    setErrorMessage('Пароли не совпадают')
  } else if (password.length < minLengthPassword) {
    setErrorMessage('Пароль должен содержать минимум 8 символов')
  } else {
    return true
  }
}
