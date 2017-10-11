import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

// React-Router-DOM
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import makeRoutes from './routes';

// Old React-Router
//import {browserHistory, Router, Route} from 'react-router';

import 'font-awesome/css/font-awesome.css';
import styles from './styles.module.css';
import './app.css';

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import {searchNearby} from './utils/googleApiHelpers';

import Header from './components/Header/Header';

/*
const routes = makeRoutes();

class myRoutes extends React.Component {
  get content() {
    return routes;
  }
  render() {
    {this.content}
  }
}
*/

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
/*
  static propTypes = {
    routes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }
 */
/*
import makeContainer from './views/Main/Container';
const main = makeContainer();
*/


/*
const gMapsContainer = () => (
  GoogleApiWrapper({
    apiKey: __GAPI_KEY__
  })(Container)
)*/

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    <Marker
      position={{ lat: -34.397, lng: 150.644 }}
    />
  </GoogleMap>
));
/*
const Container = () => (
  <div>
    <span>Hello from the container</span>
    <MapWithAMarker
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDU0QabU3g9r9pEsun426MLgRAs5dADg1Q&v=3.exp&libraries=geometry,drawing,places"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `400px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
    />
  </div>
)*/

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      places: [],
      pagination: null
    }
  }
  onReady(mapProps, map) {
    const {google} = this.props;
    const opts = {
      location: map.center,
      radius: '500',
      types: ['cafe']
    }
  searchNearby(google, map, opts)
    .then((results, pagination) => {
      this.setState({
        places: results,
        pagination
      })
      // We got some results and a pagination object
    }).catch((status, result) => {
      // There was an error
    })
  }
  render() {
    return (
      <div>
        <Header className={styles.topbar}/>
        <MapWithAMarker
          onReady={this.onReady.bind(this)}
          google={this.props.google}
          visible={false}

          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDU0QabU3g9r9pEsun426MLgRAs5dADg1Q&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        >
        {this.state.places.map(place => {
           return (<div key={place.id}>{place.name}</div>)
        })}
        </MapWithAMarker>
      </div>
    )
  }
}

class App extends React.Component {
  // class getter
  get content() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>

          <hr/>
          <Route exact path="/" component={Container}/>
        </div>
      </Router>
    );
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
ReactDOM.render(<App />, mountNode);
