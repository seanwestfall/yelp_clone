import React from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import makeMainRoutes from './views/Main/routes'

export const makeRoutes = () => {
  const main = makeMainRoutes();

  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>

        <hr/>
        <Route exact path="/" component={main}/>
      </div>
    </Router>
  )
 }

export default makeRoutes

