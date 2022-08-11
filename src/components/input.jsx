import '../css/style.css'

const Input = ({ placeholder }) => (
  <div className="input_field">
    <input type="text" placeholder={placeholder} className="input" required />
  </div>
)

export default Input
