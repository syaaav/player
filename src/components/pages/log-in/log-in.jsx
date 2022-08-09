import Input from '../../input'
import logo from '../../../img/logo-black.png'
// import LoginPass from '../../login-password/LoginPass'
import './style.css'

const LogIn = () => (
  <div className="content">
    <div className="form">
      <div>
        <img src={logo} className="logo" alt="required field" />
      </div>
      <Input placeholder="Логин" />
      <Input placeholder="Пароль" />
      <div className="buttons_field">
        <button
          type="button"
          className="button"
          // onClick={() => handleSubmit('title', 'def', 'price')}
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
      </div>
    </div>
  </div>
)

export default LogIn
