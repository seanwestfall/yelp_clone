import React, { PropTypes as T } from 'react'
import {getDetails} from '../../../utils/googleApiHelpers'
import styles from './styles.module.css'

export class Detail extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      loading: true,
      place: {id: 0, name: "Blue Bottle Coffee", rating: 0.9, location: {lat: 37.7825, lng: -122.4078}, photos: ["http://ww4.hdnux.com/photos/62/05/47/13130211/4/1024x1024.jpg", "https://www.domusweb.it/content/dam/domusweb/en/news/2017/06/01/new_blue_bottle/rmedium/domus-new-blue-bottle-08.jpg", "http://insidescoopsf.sfgate.com/wp-content/blogs.dir/732/files/blue-bottle-opens-in-market-square/fullsizerender23.jpg"]},
      location: {}
    }
  }

  componentDidMount() {
    console.log('componentDidMount', this);
    if (this.props.map) {
      this.getDetails(this.props.map);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.map &&  // make sure we have a map
      (prevProps.map !== this.props.map ||
      prevProps.params.placeId !== this.props.params.placeId)) {
        this.getDetails(this.props.map);
    }
  }

  getDetails(map) {
    console.log('getDetails', map);
    // the placeId comes from the URL, passed into
    // this component through params
    const {google, params} = this.props;
    const {placeId} = params;

    // Set the loading state
    this.setState({loading: true}, () => {
      getDetails(google, map, placeId)
      .then(place => {
        const {location} = place.geometry;
        const loc = {
          lat: location.lat(),
          lng: location.lng()
        }

        this.setState({
          place, location: loc, loading: false
        });
      })
    });
  }
  
  renderPhotos(place) {
    console.log("place", place);
    if (!place.photos || place.photos.length == 0) return;
    const cfg = {maxWidth: 100, maxHeight: 100}
    return (<div className={styles.photoStrip}>
      {place.photos.map(p => {
        //const url = `${p.getUrl(cfg)}.png`
        const url = p
        return (<img key={url} src={url} style={cfg} />)
      })}
    </div>)
  }

  render() {
    if (false) {
      return (<div className={styles.wrapper}>
                Loading...
              </div>);
    }
    // We're no longer loading when we get here
    console.log('detail this', this);
    const {place} = this.state;
    return (
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2>{place.name}</h2>
        </div>
        <div className={styles.details}>
          {this.renderPhotos(place)}
        </div>
      </div>
    )
  }
}

export default Detail
