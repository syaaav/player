/* eslint-disable jsx-a11y/label-has-associated-control */
// import NavBar from '../../navigation/navigation'
// import LoginPass from '../../login-password/LoginPass'
import './pages/log-in/style.css'

const Input = ({ placeholder }) => (
  <div className="input_field">
    <input type="text" placeholder={placeholder} className="input" required />
  </div>
)

export default Input
