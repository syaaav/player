/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import { useState } from 'react'
// import Input from '../../input'
import logo from '../../../img/logo-black.png'
import useInputRequired from '../../functions/useInputRequired'
import handleSubmitLogin from '../../functions/handleSubmitLogin'
import '../../../css/style.css'

export default function LogIn() {
  const [message, setMessage] = useState('')

  function setErrorMessage(e) {
    setMessage(e)
    console.log('Ошибка')
  }

  const login = useInputRequired('text', 'Логин', '', true, setErrorMessage)
  const password = useInputRequired(
    'password',
    'Пароль',
    '',
    true,
    setErrorMessage
  )

  return (
    <div className="content">
      <form className="form">
        <div>
          <img src={logo} className="logo" alt="required field" />
        </div>
        <div className="input_field">
          <input className="input" {...login} />
        </div>
        <div className="input_field">
          <input className="input" {...password} />
        </div>
        <span className="error-message">{message}</span>

        <button
          type="submit"
          className="button"
          onClick={(event) => handleSubmitLogin(event)}
        >
          Войти
        </button>
        <button
          type="button"
          className="button additional"
          // onClick={() => handleSubmit('title', 'def', 'price')}
        >
          Зарегистрироваться
        </button>
      </form>
    </div>
  )
}
