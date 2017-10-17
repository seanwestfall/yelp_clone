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
import Detail from './views/Main/Detail/Detail';


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
      // my code -- Sean // dummy code
      places: [
        {id: 0, name: "Blue Bottle Coffee", rating: 0.9, location: {lat: 37.7825, lng: -122.4078}},
        {id: 1, name: "Starbucks", rating: 0.9, location: {lat: 37.751278, lng: -122.431660}},
        {id: 2, name: "Arlequin Cafe & Food-To-Go", rating: 0.9, location: {lat: 37.777169, lng: -122.422616}},
        {id: 3, name: "Chantal Guillon Macarons", rating: 0.9, location: {lat: 37.776600, lng: -122.423641}},
        {id: 4, name: "20th Century Cafe", rating: 0.9, location: {lat: 37.774876, lng: -122.422378}},
        {id: 5, name: "Christopher Elbow Chocolates", rating: 0.9, location: {lat: 37.776687, lng: -122.423115}},
        {id: 6, name: "Nina's Cafe", rating: 0.9, location: {lat: 37.776011, lng: -122.421357}},
        {id: 7, name: "Mercury Cafe", rating: 0.9, location: {lat: 37.774001, lng: -122.424294}},
        {id: 8, name: "Ritual Coffee Roasters", rating: 0.9, location: {lat: 37.770560, lng: -122.443970}},
        {id: 9, name: "Cumaica Coffee", rating: 0.9, location: {lat: 37.775538, lng: -122.415912}},
        {id: 10, name: "Talbot Café", rating: 0.9, location: {lat: 37.930665, lng: -122.513707}},
        {id: 11, name: "Javalencia", rating: 0.9, location: {lat: 37.758090, lng: -122.421550}},
        {id: 12, name: "Corridor Restaurant & Cafe", rating: 0.9, location: {lat: 37.776731, lng: -122.419251}},
        {id: 13, name: "Atlas Cafe", rating: 0.9, location: {lat: 37.758946, lng: -122.411462}},
        {id: 14, name: "KitTea Cat Cafe", rating: 0.9, location: {lat: 37.773915, lng: -122.422184}},
        {id: 15, name: "Peet's Coffee", rating: 0.9, location: {lat: 37.789664, lng: -122.434227}},
        {id: 16, name: "The Market", rating: 0.9, location: {lat: 37.776769, lng: -122.416616}},
        {id: 17, name: "Andersen Bakery", rating: 0.9, location: {lat: 37.785297, lng: -122.430673}},
        {id: 18, name: "Gaslamp Cafe", rating: 0.9, location: {lat: 37.771790, lng: -122.416636}},
        {id: 19, name: "Paramo Coffee Company", rating: 0.9, location: {lat: 37.776867, lng: -122.415313}},
      ],
      pagination: null
    }

    console.log('this.state', this.state);
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
  onMarkerClick() {
    const {place} = this; // place prop
    //console.log('this.context.router;', this.context.router);
    //const {push} = this.context.router;
    //push(`/map/detail/${this.id}`)
    console.log('item', this);
    this.self.props.history.push(`/map/detail/${this.item.id}`)
    //alert(this.name);
  }
  render() {
    let children = {};
    console.log('container render this', this);
    if (true) {
      // We have children in the Container component
      var self = this;
      this.state.places.map(item => {
        item.onMarkerClick = self.onMarkerClick.bind({item, self})
      });
      children.places = this.state.places;
      //children = React.cloneElement(
        //this.props.children,
        //{
          //google: this.props.google,
          //places: this.state.places,
          //loaded: this.props.loaded
        //})
      console.log('children', children);
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
              <Map>
              {children}
              </Map>

          </div>
        </div>
      </div>
    )
  }
}/*
Container.contextTypes = {
  router: React.PropTypes.object
}*/

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
            <Route path="/map/detail/:placeId" component={Detail} />
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
