import { useRef, useState } from 'react'
import { Redirect } from 'react-router-dom'
import handleSubmitSign from '../../functions/handleSubmitSign'
import logo from '../../../img/logo-black.png'
import '../../../css/style.css'

const SignUp = () => {
  const [message, setMessage] = useState('')
  const [isSignUp, setSignUp] = useState(false)

  const textLogin = useRef(null)
  const textPassword = useRef(null)
  const textSecondPassword = useRef(null)

  function setErrorMessage(e) {
    if (e !== '') {
      setMessage(e)
    }
  }

  if (isSignUp) {
    return <Redirect to="/user/login" />
  }

  return (
    <div className="content-form">
      <div className="form">
        <div>
          <img src={logo} className="logo" alt="Skypro" />
        </div>
        <input
          className="input"
          type="email"
          placeholder="Электронная почта"
          required
          ref={textLogin}
        />
        <input
          className="input"
          type="password"
          placeholder="Пароль"
          required
          ref={textPassword}
        />
        <input
          className="input"
          type="password"
          placeholder="Повторите пароль"
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

export default SignUp
