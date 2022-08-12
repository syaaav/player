/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import { useState } from 'react'
import useInputRequired from '../../functions/useInputRequired'
import handleSubmitSign from '../../functions/handleSubmitSign'
import logo from '../../../img/logo-black.png'
import '../../../css/style.css'

export default function SignIn() {
  const [message, setMessage] = useState('')

  function setErrorMessage(e) {
    setMessage(e)
    console.log('Ошибка')
  }

  const login = useInputRequired('text', 'Логин', setErrorMessage)
  const password = useInputRequired('password', 'Пароль', setErrorMessage)
  const secondPassword = useInputRequired(
    'password',
    'Повторите пароль',
    setErrorMessage
  )

  return (
    <div className="content">
      <div className="form">
        <div>
          <img src={logo} className="logo" alt="required field" />
        </div>
        <input className="input" {...login} required />
        <input className="input" {...password} required />
        <input className="input" {...secondPassword} required />
        <span className="error-message">{message}</span>
        <div className="buttons_field">
          <button
            type="button"
            className="button"
            onClick={(event) => handleSubmitSign(event)}
          >
            Зарегистрироваться
          </button>
        </div>
      </div>
    </div>
  )
}
