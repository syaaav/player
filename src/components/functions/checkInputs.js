// eslint-disable-next-line consistent-return
export default function checkInputs(
  login,
  password,
  secondPassword,
  setErrorMessage
) {
  const minLengthPassword = 8

  if (!login.value || !password.value || !secondPassword.value) {
    console.log('Заполните все поля')
    setErrorMessage('Заполните все поля')
  } else if (password.length < minLengthPassword) {
    console.log('Пароль должен содержать минимум 8 символов')
    setErrorMessage('Пароль должен содержать минимум 8 символов')
  } else if (password.value !== secondPassword.value) {
    console.log('Пароли не совпадают')
    setErrorMessage('Пароли не совпадают')
  } else {
    return true
  }
}
