/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../img/logo-black.png'
import useInputRequired from '../../functions/useInputRequired'
import handleSubmitLogin from '../../functions/handleSubmitLogin'
import '../../../css/style.css'

export default function LogIn() {
  const [message, setMessage] = useState('')

  function setErrorMessage(e) {
    setMessage(e)
    // console.log('Ошибка')
  }

  const login = useInputRequired('text', 'Логин', setErrorMessage)
  const password = useInputRequired('password', 'Пароль', setErrorMessage)
  const textLogin = useRef(null)
  const textPassword = useRef(null)

  return (
    <div className="content-form">
      <form className="form">
        <div>
          <img src={logo} className="logo" alt="required field" />
        </div>
        <div className="input_field">
          <input className="input" {...login} required ref={textLogin} />
        </div>
        <div className="input_field">
          <input className="input" {...password} required ref={textPassword} />
        </div>
        <div className="buttons_field">
          <span className="error-message">{`${
            message ? `${message}` : ''
          }`}</span>
          <button
            type="submit"
            className="button"
            onClick={(event) =>
              handleSubmitLogin(event, textLogin, textPassword)
            }
          >
            Войти
          </button>
          <button type="button" className="button additional">
            <Link className="additional-link" to="/user/signup/">
              Зарегистрироваться
            </Link>
          </button>
        </div>
      </form>
    </div>
  )
}
