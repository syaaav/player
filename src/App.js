/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import About from './components/pages/about/about'
import LogIn from './components/pages/log-in/log-in'
import SignIn from './components/pages/sign-in/sign-in'
// import GeneralCart from './components/pages/general-cart/general-cart'
// import Order from './components/pages/cart/order'
// import Page404 from './components/pages/page-404/page-404'
import './App.css'

const App = () => (
  <div className="app">
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/sign-in" element={<SignIn />} />
      {/* <Route path="/catalog/track/all/" element={<Main />} /> */}
      {/* <Route path="/cart/:quantity/:price" element={<GeneralCart />} />
      <Route path="/" element={<Order />} />
      <Route path="*" element={<Page404 />} /> */}
    </Routes>
  </div>
)

export default App
