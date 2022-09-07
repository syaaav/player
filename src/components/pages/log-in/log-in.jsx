/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import { useRef, useState } from 'react'
import { Redirect, Link } from 'react-router-dom'
import logo from '../../../img/logo-black.png'
import handleSubmitLogin from '../../functions/handle-submit-login'
import '../../../css/style.css'

export default function LogIn() {
  const [message, setMessage] = useState('')
  const [isLogIn, setLogIn] = useState(false)

  const textLogin = useRef(null)
  const textPassword = useRef(null)

  function setErrorMessage(e) {
    if (e !== '') {
      setMessage(e)
    }
  }

  if (isLogIn) {
    return <Redirect to="/catalog/track/all/" />
  }

  return (
    <div className="content-form">
      <form className="form">
        <div>
          <img src={logo} className="logo" alt="required field" />
        </div>
        <div className="input_field">
          <input
            className="input"
            type="email"
            placeholder="Электронная почта"
            required
            ref={textLogin}
          />
        </div>
        <div className="input_field">
          <input
            className="input"
            type="password"
            placeholder="Пароль"
            required
            ref={textPassword}
          />
        </div>
        <div className="buttons_field">
          <span className="error-message">{`${
            message ? `${message}` : ''
          }`}</span>
          <button
            type="submit"
            className="button"
            onClick={(event) =>
              handleSubmitLogin(
                event,
                textLogin,
                textPassword,
                setErrorMessage,
                setLogIn
              )
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
