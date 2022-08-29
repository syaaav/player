/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import { useRef, useState } from 'react'
import { Redirect } from 'react-router-dom'
import useInputRequired from '../../functions/useInputRequired'
import handleSubmitSign from '../../functions/handleSubmitSign'
import logo from '../../../img/logo-black.png'
import '../../../css/style.css'

export default function SignUp() {
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)
  const [isSignUp, setSignUp] = useState(false)

  function setErrorMessage(e) {
    if (e === '') {
      setError(false)
    } else {
      setMessage(e)
      setError(true)
    }
    console.log('Ошибка')
  }

  const login = useInputRequired('text', 'Логин', setErrorMessage)
  const password = useInputRequired('password', 'Пароль', setErrorMessage)
  const secondPassword = useInputRequired(
    'password',
    'Повторите пароль',
    setErrorMessage
  )
  const textLogin = useRef(null)
  const textPassword = useRef(null)
  const textSecondPassword = useRef(null)

  if (isSignUp) {
    return <Redirect to="/user/login" />
  }

  return (
    <div className="content-form">
      <div className="form">
        <div>
          <img src={logo} className="logo" alt="Skypro" />
        </div>
        <input className="input" {...login} required ref={textLogin} />
        <input className="input" {...password} required ref={textPassword} />
        <input
          className="input"
          {...secondPassword}
          required
          ref={textSecondPassword}
        />

        <div className="buttons_field">
          <span className="error-message">{`${
            message ? `${message}` : ''
          }`}</span>
          <button
            type="submit"
            className="button"
            onClick={(event) =>
              handleSubmitSign(
                event,
                error,
                textLogin,
                textPassword,
                textSecondPassword,
                setErrorMessage,
                setSignUp
              )
            }
          >
            Зарегистрироваться
          </button>
        </div>
      </div>
    </div>
  )
}
