/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LogIn from './components/pages/log-in/log-in'
import SignIn from './components/pages/sign-in/sign-in'
import Main from './components/pages/main/main'
import './App.css'

const App = () => (
  <div className="wrapper">
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/catalog/track/all/" element={<Main />} />
      {/* <Route path="/cart/:quantity/:price" element={<GeneralCart />} />
      <Route path="*" element={<Page404 />} /> */}
    </Routes>
  </div>
)

export default App
