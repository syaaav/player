import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LogIn from './components/pages/log-in/log-in'
import SignUp from './components/pages/sign-up/sign-up'
import Main from './components/pages/main/main'
import Page404 from './components/pages/page404/page404'
import './App.css'

const App = () => (
  <div className="wrapper">
    <Router>
      <Switch>
        <Route path="/user/login/">
          <LogIn />
        </Route>
        <Route path="/user/signup/">
          <SignUp />
        </Route>
        <Route path="/catalog/track/all/">
          <Main />
        </Route>
        <Route path="*">
          <Page404 />{' '}
        </Route>
      </Switch>
    </Router>
  </div>
)

export default App
