// import { Navigate } from 'react-router-dom'
// import { useHistory } from 'react-router-dom'
// import { useState, useEffect } from 'react'
// import { Navigate } from 'react-router-dom'
import setRequest from './setRequest'

export default function handleSubmitSign(
  event,
  errorMessage,
  textLogin,
  textPassword,
  textSecondPassword,
  setErrorMessage,
  setSignUp
) {
  if (
    textPassword.current.value !== textSecondPassword.current.value ||
    errorMessage ||
    !textLogin.current.value ||
    !textPassword.current.value ||
    !textSecondPassword.current.value
  ) {
    event.preventDefault()
    console.log('Регистрация НЕ прошла!')
  } else {
    setRequest(
      textLogin.current.value,
      textPassword.current.value,
      setSignUp,
      setErrorMessage
    )
  }
}
