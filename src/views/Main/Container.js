import React from 'react'
//import GoogleApiWrapper from 'google-maps-react'
import { GoogleMap, Marker } from "react-google-maps"

export class Container extends React.Component {
  render() {
    return (
      <div>
        Hello from the container
      </div>
    )
  }
}
Container.contextTypes = {
  router: React.PropTypes.object
}

//export default Container

/*
export default GoogleApiWrapper({
  apiKey: __GAPI_KEY__
})(Container)*/


