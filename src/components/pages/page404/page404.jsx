import { Link } from 'react-router-dom'
import '../../../css/style.css'

const Page404 = () => (
  <div className="container page404">
    <span className="page404__icon">😢</span>
    <span className="page404__title">Страница не найдена</span>
    <span className="page404__link">
      <Link className="page404__link" to="/catalog/track/all/">
        Вернуться на главный экран
      </Link>
    </span>
  </div>
)

export default Page404
