import { useState } from 'react'
import logo from '../../../img/logo.png'
import Menu from './menu'
import Bar from './bar'
import CenterBlock from './centerblock'
import SideBar from './sidebar'
import '../../../css/style.css'

const Main = () => {
  const [isHidden, setHidden] = useState(false)

  function handleHidden(target) {
    setHidden((prev) => !prev)
    console.log(target)
  }

  return (
    <div className="container">
      <main className="main">
        <nav className="main__nav nav">
          <div className="nav__logo logo">
            <img className="logo__image" src={logo} alt="logo" />
          </div>
          <div
            className="nav__burger burger"
            role="button"
            onClick={(e) => {
              handleHidden(e.target)
            }}
            onKeyDown={handleHidden}
            tabIndex={0}
          >
            <span className="burger__line" />
            <span className="burger__line" />
            <span className="burger__line" />
          </div>
          <div className={`nav__menu menu ${!isHidden ? 'hidden' : ''}`}>
            <Menu />
          </div>
        </nav>
        <CenterBlock />
        <SideBar />
      </main>
      <Bar />
    </div>
  )
}

export default Main
