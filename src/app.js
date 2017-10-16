import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

// React-Router-DOM
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
//import makeRoutes from './routes';

// Old React-Router
//import {browserHistory, Router, Route} from 'react-router';

import 'font-awesome/css/font-awesome.css';
import styles from './styles.module.css';
import './app.css';

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import {searchNearby} from './utils/googleApiHelpers';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

import Map from './views/Main/Map/Map';

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
      // my code -- Sean
      places: [
        {name: "Blue Bottle Coffee", rating: 0.9},
        {name: "Starbucks", rating: 0.9},
        {name: "Arlequin Cafe & Food-To-Go", rating: 0.9},
        {name: "Chantal Guillon Macarons", rating: 0.9},
        {name: "20th Century Cafe", rating: 0.9},
        {name: "Christopher Elbow Chocolates", rating: 0.9},
        {name: "Nina's Cafe", rating: 0.9},
        {name: "Mercury Cafe", rating: 0.9},
        {name: "Ritual Coffee Roasters", rating: 0.9},
        {name: "Cumaica Coffee", rating: 0.9},
        {name: "Talbot Café", rating: 0.9},
        {name: "Javalencia", rating: 0.9},
        {name: "Corridor Restaurant & Cafe", rating: 0.9},
        {name: "Corridor Restaurant & Cafe", rating: 0.9},
        {name: "KitTea Cat Cafe", rating: 0.9},
        {name: "Peet's Coffee", rating: 0.9},
        {name: "The Market", rating: 0.9},
        {name: "Andersen Bakery", rating: 0.9},
        {name: "Gaslamp Cafe", rating: 0.9},
        {name: "Paramo Coffee Company", rating: 0.9},
      ],
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
  onMarkerClick(item) {
    const {place} = item; // place prop
    const {push} = this.context.router;
    push(`/map/detail/${place.place_id}`)
  }
  render() {
    let children = null;
    if (this.props.children) {
      // We have children in the Container component
      children = React.cloneElement(
        this.props.children,
        {
          google: this.props.google,
          places: this.state.places,
          loaded: this.props.loaded
        })
    }
    return (
      <div>
        <Header/>
        <div className={'main'} style={{display: `block`}}>
          <Sidebar 
            title={'Restaurants'}
            places={this.state.places}
            style={{width: `20%`, float: `left`}}
          />
          <div className={styles.content}
               style={{width: `70%`, float: `left`}}
          >
              {/* Setting children routes to be rendered*/}
              <Map />

          </div>
        </div>
      </div>
    )
  }
}

/*
class Map extends React.Component {
  render() {
    return (
      <div>
        MAP!
      </div>
    )
  }
}*/

/*
        //<div className={styles.content}>
          //{[> Setting children routes to be rendered<]}
          //{children}
        //</div>
 */

class App extends React.Component {
  // class getter
  get content() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/map">Map</Link></li>
          </ul>

          <hr/>
          <Switch>
            <Route exact path="/" component={Container} />
            <Route path="/map" component={Map} />
          </Switch>
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

/*
            <Route path="map" component={Map} />
            <Route path="detail/:placeId"
              component={Detail} />

            <IndexRoute component={Map} />
 
 */

const mountNode = document.querySelector('#root');
ReactDOM.render(<App />, mountNode);
