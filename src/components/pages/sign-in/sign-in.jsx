import Input from '../../input'
import logo from '../../../img/logo-black.png'
import '../../../css/style.css'

const SignIn = () => (
  <div className="content">
    <div className="form">
      <div>
        <img src={logo} className="logo" alt="required field" />
      </div>
      <Input placeholder="Логин" />
      <Input placeholder="Пароль" />
      <Input placeholder="Повторите пароль" />
      <div className="buttons_field">
        <button
          type="button"
          className="button"
          // onClick={() => handleSubmit('title', 'def', 'price')}
        >
          Зарегистрироваться
        </button>
      </div>
    </div>
  </div>
)

export default SignIn
