import React, { PropTypes } from 'react';
//import {browserHistory, Router, Route} from 'react-router';
import ReactDOM from 'react-dom';

// React-Router-DOM
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';


import 'font-awesome/css/font-awesome.css';
import styles from './styles.module.css';
import './app.css';

/*
class Home extends React.Component {
  render() {
    return (<div>Hello world</div>)
  }
};*/
/*
class Home extends React.Component{
  render() {
    return (<div>Hello world</div>)
  }
}*/

const Home = () => <h1>Home</h1>;

const routes = (
  <Router>
    <Route path="/" component={Home} />
  </Router>
)

// test
//import App from 'containers/App/App'

/*
const App = React.createClass({
  render: function() {
    return (<div>Text text text</div>);
  }
});
//Error:
//TypeError: _react3.default.createClass is not a function
*/

/*
class App extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <h1>
          <i className="fa fa-star"></i>
          Environment: {__NODE_ENV__}</h1>
      </div>
    );
  }
};
*/

class App extends React.Component {
  static propTypes = {
    routes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  // class getter
  get content() {
    return (<div>HelloWorld!</div>)
  }

  render() {
    return (
      <div style={ { height: '100%' } }>
        {this.content}
      </div>
    )
  }
};

const mountNode = document.querySelector('#root');
ReactDOM.render(<App history={browserHistory} />, mountNode);
