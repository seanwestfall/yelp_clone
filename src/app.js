import React from 'react'
import ReactDOM from 'react-dom'

import styles from './styles.module.css'
import './app.css'

console.log(styles);

/*
const App = React.createClass({
  render: function() {
    return (<div>Text text text</div>);
  }
});
//Error:
//TypeError: _react3.default.createClass is not a function
*/

class App extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        TEST TEST TEST
      </div>
    );
  }
};

const mountNode = document.querySelector('#root');
ReactDOM.render(<App />, mountNode);
