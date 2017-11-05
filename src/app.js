/*jshint esversion: 6 */

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

//import 'font-awesome/css/font-awesome.css';
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
  `<GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    <Marker
      position={{ lat: -34.397, lng: 150.644 }}
    />
  </GoogleMap>`
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
  constructor(props, context) {
    super(props, context);

    this.state = {
      // my code -- Sean // dummy code
      places: [
        {id: 0, name: "Blue Bottle Coffee", rating: 0.9, location: {lat: 37.7825, lng: -122.4078},
          photos: ["http://ww4.hdnux.com/photos/62/05/47/13130211/4/1024x1024.jpg", "https://cdn.vox-cdn.com/thumbor/zgnv2cMP0biRNcgCsAZ9SfjNGHY=/0x91:960x631/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/55158155/Blue_Bottle_Coffee_CA_interior.0.jpg", "http://insidescoopsf.sfgate.com/wp-content/blogs.dir/732/files/blue-bottle-opens-in-market-square/fullsizerender23.jpg", "https://cdn.vox-cdn.com/thumbor/NuL6mnmW2GpWgCy0J2h6C1pPJ7k=/0x0:3264x2448/1200x800/filters:focal(0x0:3264x2448)/cdn.vox-cdn.com/uploads/chorus_image/image/46558466/IMG_1445.0.0.JPG", "https://media1.fdncms.com/eastbayexpress/imager/u/original/9123559/bluebottle.jpg", "https://www.domusweb.it/content/dam/domusweb/en/news/2017/06/01/new_blue_bottle/rmedium/domus-new-blue-bottle-08.jpg", "https://media-cdn.tripadvisor.com/media/photo-s/02/f4/a5/ec/blue-bottle-coffee-ferry.jpg", "https://media-cdn.tripadvisor.com/media/photo-s/02/f4/a5/f2/blue-bottle-coffee-ferry.jpg", "https://www.domusweb.it/content/dam/domusweb/en/news/2017/06/01/new_blue_bottle/rmedium/domus-new-blue-bottle-08.jpg", "https://media-cdn.tripadvisor.com/media/photo-s/05/b8/5d/cf/ferry-building-marketplace.jpg"]},
        {id: 1, name: "Starbucks", rating: 0.9, location: {lat: 37.751278, lng: -122.431660},
          photos: ["https://qzprod.files.wordpress.com/2015/01/starbucks-in-harlem.jpg?quality=80&strip=all", "http://www.raisingthevolume.com/wp-content/uploads/2012/07/starbucks_interview_people_partII1-620x389.png", "http://static3.businessinsider.com/image/4dfa1dd149e2ae294d020000/usc-professor-heres-why-your-gentrified-neighborhood-hasnt-gotten-a-starbucks-yet.jpg", "http://www.straitstimes.com/sites/default/files/articles/2014/10/29/ohcoffee-291014e_2x.jpg", "https://s3.amazonaws.com/gs-waymarking-images/de1f9bcb-5d7f-4a18-bc37-586fd4b45e0b.JPG", "https://clemensvdlinden.com/wp-content/uploads/2015/05/starbucks.jpg", "http://i2.cdn.turner.com/money/dam/assets/121019020237-n-starbucks-schultz-india-00000000-tablet-large.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/HK_Mongkok_Grand_Tower_mall_interior_Starbucks_Coffee_shop.JPG/640px-HK_Mongkok_Grand_Tower_mall_interior_Starbucks_Coffee_shop.JPG", "https://images.enca.com/enca/Starbucks.JPG", "https://www.irishtimes.com/polopoly_fs/1.2209571.1431445696!/image/image.jpg"]},
        {id: 2, name: "Arlequin Cafe & Food-To-Go", rating: 0.9, location: {lat: 37.777169, lng: -122.422616},
          photos: ["https://bartable.bart.gov/files/images/discoveries/BARTable_SFWifiRoundup_ArlequinCafe-9052.jpg", "https://media.timeout.com/images/103425986/image.jpg", "https://inhabitat.com/wp-content/blogs.dir/1/files/2014/09/Sightglass-Coffee-20th-Street-Boor-Bridges-Architecture-4.jpg", "https://i.pinimg.com/originals/b9/19/dd/b919dd2adce1758710e20b8320c51fd8.jpg", "https://www.californiabeaches.com/wp-content/uploads/2016/03/2-HOMEPAGE-PIER3-INTERIOR.jpg", "https://s3-media1.fl.yelpcdn.com/bphoto/ghaDcAmreESkIMPJsFvgtQ/348s.jpg", "https://s3-media1.fl.yelpcdn.com/bphoto/gLUqKopecdAaLAVsQ-P-zA/ls.jpg", "https://s3-media1.fl.yelpcdn.com/bphoto/MQZdkwQH_K10K8toUrBYmw/348s.jpg", "https://s3-media1.fl.yelpcdn.com/bphoto/gLUqKopecdAaLAVsQ-P-zA/ls.jpg", "http://68.media.tumblr.com/3a904329a49d5323cbc8e97f01fadb01/tumblr_o1b9c6cEyg1qiwo8xo1_r1_500.jpg"]},
        {id: 3, name: "Chantal Guillon Macarons", rating: 0.9, location: {lat: 37.776600, lng: -122.423641},
          photos: ["http://strandedfoodie.com/wp-content/uploads/2013/07/DSC_1834.jpg", "http://gfinsf.com/wp-content/uploads/chantalguillion_001.jpg", "http://strandedfoodie.com/wp-content/uploads/2013/07/DSC_1869.jpg", "http://4.bp.blogspot.com/-Fsfh0AQislc/Uv0cX3Ao5gI/AAAAAAAASOQ/mmSRTxgEBE4/s1600/payPal_chantalGuillon_marquee.jpg", "https://s3-media2.fl.yelpcdn.com/bphoto/Tl5QiIEHJH9eIaoSNOvZ0A/348s.jpg", "http://4.bp.blogspot.com/-JLcC5w2qIgg/VYXeTFnSezI/AAAAAAAAOJo/aX8mhZUcohU/s1600/chantal%2B4.JPG", "https://s3-media1.fl.yelpcdn.com/bphoto/VO9_NLycZsf_JR9Qf2wieA/ls.jpg", "https://seasoningandsalt.files.wordpress.com/2013/07/0711.jpg", "http://www.infrenchstyle.com/wp-content/uploads/2014/01/Chantal-Guillon-macarons4-e1388737257363.jpg", "https://s3-media4.fl.yelpcdn.com/bphoto/hUH_3_ZZ-itG0HKcp_2ccA/348s.jpg"]},
        {id: 4, name: "20th Century Cafe", rating: 0.9, location: {lat: 37.774876, lng: -122.422378},
          photos: ["https://s3-media3.fl.yelpcdn.com/bphoto/3k1ri9w1I_j7EtX4IBSbvQ/348s.jpg", "https://s3-media1.fl.yelpcdn.com/bphoto/2_Wpf8rAInjryoN4p9tccQ/348s.jpg", "https://hoodwork-production.s3.amazonaws.com/uploads/story/image/6945/20thcenturycafe_3.jpg", "https://hoodwork-production.s3.amazonaws.com/uploads/story/image/6825/20th.jpg", "https://s3-media1.fl.yelpcdn.com/bphoto/0J0kAFz1iNPo4fHnEwa1Hw/348s.jpg", "http://insidescoopsf.sfgate.com/files/2013/07/photo-1-1-600x495.jpg", "https://s3-media4.fl.yelpcdn.com/bphoto/o-XmzdE1j8uGMebzHYDK4g/o.jpg", "https://s3-media3.fl.yelpcdn.com/bphoto/B0vKyso0mrVSXHWspdOQUg/348s.jpg", "http://www.tablehopper.com/chatterbox/assets_c/2013/07/01_20th_Century_Cafe-thumb-300xauto-6437.jpg", "https://cdn.remodelista.com/wp-content/uploads/2016/02/20th-Century-Cafe-Laurie-Frankel-Remodelista.jpg"]},
        {id: 5, name: "Christopher Elbow Chocolates", rating: 0.9, location: {lat: 37.776687, lng: -122.423115},
          photos: ["https://slideshow.starchefs.com/p.php?a=fnFNYnt4YmBwZXtqdnZebm5oeXBWaGJtZGllYHZ3dEp%2FYV4hOjomKT4yOyEqS1tFJiU%2FOTomOjc2JTc2JyslPisxPzsnJjQmPjI%2FNC07Lj86Mjk%3D&m=1436305088", "https://s3-us-west-2.amazonaws.com/files.visitkc.com/christopher-elbow-article-header.jpg", "http://farm4.static.flickr.com/3517/3961835576_4f0aee64e0.jpg", "http://www.mockwallace.com/uploads/7/0/1/4/7014939/4495576_orig.jpg", "https://sometimesicrave.files.wordpress.com/2014/11/dsc_9995-2.jpg", "https://majid.info/blog/wp-content/uploads/2008/05/elbow.jpg", "http://minetteriordan.com/wp-content/uploads/2015/02/c0.jpg", "http://4.bp.blogspot.com/-KhHhO2qVDJU/TnO0OqDkJNI/AAAAAAAAALA/D5_yY6htgGs/s1600/DSC_0202.JPG", "http://farm4.static.flickr.com/3517/3961835576_4f0aee64e0.jpg", "http://minetteriordan.com/wp-content/uploads/2015/02/c0.jpg"]},
        {id: 6, name: "Nina's Cafe", rating: 0.9, location: {lat: 37.776011, lng: -122.421357},
          photos: ["https://stpaulspot.files.wordpress.com/2011/10/dsc_5053b.jpg", "https://media-cdn.tripadvisor.com/media/photo-s/03/1f/4b/de/ninas-cafe.jpg", "https://media-cdn.tripadvisor.com/media/photo-s/08/f5/56/d7/nina-s-cafe.jpg", "http://www.urbanthriving.com/wp-content/themes/mercina/includes/plugins/timthumb.php?src=http://www.urbanthriving.com/wp-content/uploads/2012/06/Ninas002.jpg&w=713", "https://media-cdn.tripadvisor.com/media/photo-s/05/f3/7c/67/nina-s-cafe.jpg", "http://i.cdn.turner.com/ireport/sm/prod/2009/04/05/WE00238407/465270/Anon1238960473-NinasCafeStPaulMN777847_lg.jpg", "https://pbs.twimg.com/profile_images/583294097592434688/6bc0j7OF.jpg", "https://s3-media1.fl.yelpcdn.com/bphoto/_8yAn9zo16HMw35D5FgzNg/ls.jpg", "https://trazzler-images.s3.amazonaws.com/uploads/submission/image/4fcd005323154e0001004f71/full_79ebfd38-8e52-4372-bdf3-ff50b07894e4.jpg", "https://hoodwork-production.s3.amazonaws.com/uploads/story/image/10277/Nina_outside.jpg"]},
        {id: 7, name: "Mercury Cafe", rating: 0.9, location: {lat: 37.774001, lng: -122.424294},
          photos: ["https://images1.westword.com/imager/mercury-cafe/u/original/5160981/5287203.0.jpg", "http://i.axs.com/2014/06/promoted-media-optimized_539cbd598f7a6.jpg", "https://media-cdn.tripadvisor.com/media/photo-s/02/cd/09/75/super-cozy-setting-at.jpg", "https://s3-media3.fl.yelpcdn.com/bphoto/xXxxMfVvaEa3M_O5FE9vHQ/168s.jpg", "http://mercurycafe.com/wp-content/uploads/2013/01/mercury_exterior.jpg", "http://www.mcentertainment.com/data/imagegallery/e2954afc-b776-84f3-1773-c0498c57e313/7c612082-e0ab-4fb1-f862-e6964ccb90cd.jpg", "https://s3-media2.fl.yelpcdn.com/bphoto/fYJdsugwfoa8xsDeKa95rA/ls.jpg", "https://i.pinimg.com/originals/18/2f/47/182f47f355f80c9bf4b9b4a39ef04ed5.jpg", "http://mercurycafe.com/wp-content/uploads/slideshow-gallery/weddinghall.jpg", "https://wwcdn.weddingwire.com/vendor/535001_540000/539694/thumbnails/800x800_1343841298829-0782.jpg"]},
        {id: 8, name: "Ritual Coffee Roasters", rating: 0.9, location: {lat: 37.770560, lng: -122.443970},
          photos: ["http://insidescoopsf.sfgate.com/files/2014/10/10603468_10152662146418147_7156242436485761768_n-600x400.jpg", "https://media-cdn.tripadvisor.com/media/photo-s/02/f2/40/8b/ritual-coffee-roasters.jpg", "http://theshot.coffeeratings.com/wp-content/08-2h/ritualOxbow_2064.jpg", "https://dailycoffeenews.com/wp-content/uploads/2016/04/ritual-haight-ashbury-620x414.jpg", "http://theshot.coffeeratings.com/wp-content/15/RitualValencia2_3054.jpg", "https://photos.smugmug.com/Travel/Napa-San-Francisco-2011/i-KQhhJbH/0/9fa6a331/X2/Napa%20-%20San%20Francisco%202011-17-X2.jpg", "https://s3-media1.fl.yelpcdn.com/bphoto/ha7_66K4bjcyFNkeUfNBuw/ls.jpg", "https://s3-media3.fl.yelpcdn.com/bphoto/Gj-bET6SvglUcQ09IjPD5w/168s.jpg", "https://9968c6ef49dc043599a5-e151928c3d69a5a4a2d07a8bf3efa90a.ssl.cf2.rackcdn.com/348517.jpg", "http://theshot.coffeeratings.com/wp-content/08-2h/ritualOxbow_2066.jpg"]},
        {id: 9, name: "Cumaica Coffee", rating: 0.9, location: {lat: 37.775538, lng: -122.415912},
          photos: ["https://s3-media1.fl.yelpcdn.com/bphoto/_6yIBTM1XZUGPYz8IQ9dhg/348s.jpg", "https://s3-media1.fl.yelpcdn.com/bphoto/7gjZ7GAUTUACuWkqrs0vSQ/348s.jpg", "https://igx.4sqi.net/img/general/200x200/8430048_EkW71g2Jz8N1aAtlpgxsBb9IU0dozpyHJYFcjX2Oqco.jpg", "https://s3-media1.fl.yelpcdn.com/bphoto/cuMOOyk4AUb0cR3azeEjdw/o.jpg", "https://cdn.workfrom.co/files/usermedia/70580-5WRrV9a5TBGFSY3VNpjt-ScreenShot2016-11-09at9.51.51PM.png", "https://cdn.workfrom.co/files/usermedia/70580-8lWGSG9tTMC88Li0xmFv-ScreenShot2016-11-09at9.50.36PM.png", "https://s3-media1.fl.yelpcdn.com/bphoto/Ox3gZdSSe6LhDeYcdRTl9A/ls.jpg", "https://igx.4sqi.net/img/general/200x200/3340095_FeY85zDEtIsPsZXiUfFNXztFTdEhArKABXQIfMFOU0o.jpg", "https://s3-media1.fl.yelpcdn.com/bphoto/PJbwAKLNOVyVQ0adSguV3w/168s.jpg", "https://igx.4sqi.net/img/general/200x200/3934094_lrpKbVQkZ3N6DYO_rJ89j3xjxdT6iSKgOjLxNSIx3sk.jpg"]},
        {id: 10, name: "Talbot Café", rating: 0.9, location: {lat: 37.930665, lng: -122.513707},
          photos: ["https://hoodwork-production.s3.amazonaws.com/uploads/story/image/6565/talbotcafe.jpg", "https://oceancitytoday.villagesoup.com/media/Common/FlagPublications/2016/6/16/2063407/t1200-%E2%80%A2IMG_5600.jpg", "https://s3-media4.fl.yelpcdn.com/bphoto/EvYMI5VNVQHjaIuGG09bTQ/348s.jpg", "https://s3-media4.fl.yelpcdn.com/bphoto/LTQc0GioEGONg_kUTGtY1A/ls.jpg", "http://ambassadordublin.com/wp-content/uploads/2014/08/101-Talbot-inside.jpg", "https://media-cdn.tripadvisor.com/media/photo-s/09/a4/e5/e1/selections-port-talbot.jpg", "ihttps://lh4.googleusercontent.com/-Q5sNCZJLGZE/UGxfjtSRiAI/AAAAAAAAHNw/2IuBXAmUOg0/talbot2.jpg?imgmax=1600", "https://media-cdn.tripadvisor.com/media/photo-s/05/19/f2/e8/selections-port-talbot.jpg", "https://dineindublin.ie/wp-content/uploads/sites/3/2014/07/101-Talbot-22.jpg", "https://www.irishtimes.com/polopoly_fs/1.1513451.1378120420!/image/image.jpg_gen/derivatives/box_620_330/image.jpg"]},
        {id: 11, name: "Javalencia", rating: 0.9, location: {lat: 37.758090, lng: -122.421550},
          photos: ["https://s3-media2.fl.yelpcdn.com/bphoto/V9Nphypl9rFhaN7SuEsKXw/348s.jpg", "https://s3-media3.fl.yelpcdn.com/bphoto/NaYI8ukiObfH0zThKXCJOA/ls.jpg", "https://s3-media3.fl.yelpcdn.com/bphoto/Q9gHEOYzfmnaFemqNsVwNg/180s.jpg", "https://s3-media4.fl.yelpcdn.com/bphoto/Cg7VpkoahhAKsS-5RB0CQQ/180s.jpg", "https://s3-media1.fl.yelpcdn.com/bphoto/WEZn71uAMjtIQYKrW0F3SQ/ls.jpg", "https://igx.4sqi.net/img/general/200x200/20861554_JfWGcg0zmD06ez-eUXoSTxLBFt0Jam4Xd44JGLJAAFY.jpg", "https://igx.4sqi.net/img/general/200x200/12938459_mjYiAQxZMlrErSb5qElcFhGLaVAi4KTglVpnus-ieWM.jpg", "https://igx.4sqi.net/img/general/200x200/32898_N6EQU90ScCFks0okynUcO9-tEuqm0O6NfbD-x4B08UE.jpg", "http://static.wixstatic.com/media/10eef4_bb663a68a0f04c25b3d59c1b269a2edb.jpg/v1/fill/w_232,h_265,al_c,q_80,usm_0.66_1.00_0.01/10eef4_bb663a68a0f04c25b3d59c1b269a2edb.webp", "https://igx.4sqi.net/img/general/200x200/3602478_Hw3n-_qqvBRVMdko6oS95lhPLgPf7tKA5ZcKpwUru-s.jpg"]},
        {id: 12, name: "Corridor Restaurant & Cafe", rating: 0.9, location: {lat: 37.776731, lng: -122.419251},
          photos: ["https://s3-media3.fl.yelpcdn.com/bphoto/h3hf8FDOyhnxlHURjaisdQ/348s.jpg", "https://s3-media2.fl.yelpcdn.com/bphoto/fj2dWOitggO5Hd_znUizAw/ls.jpg", "https://hoodwork-production.s3.amazonaws.com/uploads/story/image/16368/Corridor3.jpg", "https://resizer.otstatic.com/v2/photos/large/24614183.jpg", "https://lh3.ggpht.com/p/AF1QipNtKILbTLHFdueIzQR6q815V486xedta2J_o4lR=w512-h384-n", "https://resizer.otstatic.com/v2/photos/medium/23672498.jpg", "http://news.theregistrysf.com/wp-content/uploads/2017/04/NPK_5935-LORES-612x271.jpg", "https://lh3.ggpht.com/p/AF1QipMmEMidZHI1me-bksJMWezB4YVw9VN8Ejg6Yk_P=w288-h384-n", "https://1.bp.blogspot.com/-GMKZ980fNik/WHcBiHNTwvI/AAAAAAAAGNg/rTwwQJEvFqIE27_TeyIYXo1h3_iK5ca2QCLcB/s1600/IMG_4970.JPG", "https://media-cdn.tripadvisor.com/media/photo-s/02/ec/85/5f/cafe-corridor.jpg"]},
        {id: 13, name: "Atlas Cafe", rating: 0.9, location: {lat: 37.758946, lng: -122.411462},
          photos: ["http://www.atlascafe.net/images/02.jpg", "http://atlas-cafe.com/169ATLAS_04_15_09.jpg", "http://farm4.static.flickr.com/3436/3368851112_63e7684e12_o.jpg", "http://www.atlascafe.net/images/01.jpg", "http://atlascafe.ca/wp-content/themes/atlascafe/inc/home_banner.jpg", "http://images.nymag.com/listings/restaurant/maincafeatlas.jpg", "http://www.atlascafe.net/images/03.jpg", "http://www.hrdina.tv/images/projekty/158/cafeatlas01.jpg", "http://img.photobucket.com/albums/v223/Liz-ONBC/M%20Train/Cafes/Atlas_zpsbzxjvnxv.jpg~original", "https://s3-media4.fl.yelpcdn.com/bphoto/QR50HNZmDDuh5Ayk_i6kHw/ls.jpg"]},
        {id: 14, name: "KitTea Cat Cafe", rating: 0.9, location: {lat: 37.773915, lng: -122.422184},
          photos: ["https://media-cdn.tripadvisor.com/media/photo-o/0d/5b/cb/2c/the-cat-lounge.jpg", "https://cdn.vox-cdn.com/uploads/chorus_asset/file/4518637/lead_20KitTea_PChang-8455-thumb.0.jpg", "https://static1.squarespace.com/static/54d2df57e4b0526a666a8958/t/57992f84e58c62c0252cd15a/1469656981303/KitTea+cat+benefits.png", "https://media-cdn.tripadvisor.com/media/photo-s/0e/6c/5e/44/kittea-cat-cafe.jpg", "https://static1.squarespace.com/static/54d2df57e4b0526a666a8958/58432acc29687f59fe574f7b/58432accf7e0ab54ad837f6d/1494547100453/host+station.png", "https://s3-media3.fl.yelpcdn.com/bphoto/A4X_B54w5fpPJpbgfX84og/348s.jpg", "http://ihavecat.com/wp-content/uploads/2015/10/KitTea-Outside.png", "https://s3-media3.fl.yelpcdn.com/bphoto/A4X_B54w5fpPJpbgfX84og/348s.jpg", "http://ihavecat.com/wp-content/uploads/2015/10/boutique-area.jpg", "http://ihavecat.com/wp-content/uploads/2015/10/cafe-area.jpg"]},
        {id: 15, name: "Peet's Coffee", rating: 0.9, location: {lat: 37.789664, lng: -122.434227},
          photos: ["http://unitedstatesmapz.com/wp-content/uploads/2017/06/peets.0.jpg", "https://media.flysfo.com/pub_Peets_850x677.jpg", "https://media.flysfo.com/pub_PeetsT3Mez_850x677.jpg", "http://www.solanoshop.com/images/stores/Peets%20Coffee/peetsCoffee-03.jpg", "https://www.fillmoreshop.com/images/stores/peets/peets-03.jpg", "http://mms.businesswire.com/media/20140128005571/en/400878/5/Peets-Chestnut-102.jpg", "https://www.eatdrinkdeals.com/home/wp-content/uploads/2012/03/peetscoffee-300x232.jpg", "http://sacramento.aero/images/uploads/merchants/_colorboximg/Peets.jpg", "https://s3-media2.fl.yelpcdn.com/bphoto/scY38BdExWFtXVqcodorMQ/ls.jpg", "https://cdn.patch.com/users/78009/2012/07/T800x600/3c73f907046d84c817b47e60cfff421.jpg"]},
        {id: 16, name: "The Market", rating: 0.9, location: {lat: 37.776769, lng: -122.416616},
          photos: ["https://i.pinimg.com/originals/2b/c4/94/2bc49458f9d439a032aec37959a27b0c.jpg", "https://cdn.vox-cdn.com/uploads/chorus_image/image/45634220/upload.0.0.0.0.0.jpg", "http://daviding.com/webphotos/albums/200812h-SanFran-Ferry/di_20081212-142240-sf-ferrybuilding-view-e.JPG", "http://ww4.hdnux.com/photos/43/36/66/9301423/9/920x1240.jpg", "https://sf.uli.org/wp-content/uploads/sites/47/2015/03/Market-on-Market-300x200.jpg", "https://s3-media3.fl.yelpcdn.com/bphoto/QJD-r-0B_JY91W7sEUnigQ/ls.jpg", "http://ww1.hdnux.com/photos/43/23/53/9255616/15/rawImage.jpg", "http://ww3.hdnux.com/photos/32/70/40/7047226/11/rawImage.jpg", "https://sanfrancisco.regency.hyatt.com/content/dam/PropertyWebsites/regency/sfors/Media/All/Hyatt-Regency-San-Francisco-P191-Market-Seating-Area.masthead-feature-panel-medium.jpg", "http://assets1.eiqwebdemo.com/gr/594c29e13b545.jpg"]},
        {id: 17, name: "Andersen Bakery", rating: 0.9, location: {lat: 37.785297, lng: -122.430673},
          photos: ["https://s3-media2.fl.yelpcdn.com/bphoto/3Zi9BlMU-5NiSnJ9yPDOGw/ls.jpg", "https://s3-media2.fl.yelpcdn.com/bphoto/K6WskXl5RGRXmBS_Qx21sQ/348s.jpg", "https://japancentersf-wpengine.netdna-ssl.com/wp-content/uploads/AndersenBakery-StorePic.jpg", "https://media-cdn.tripadvisor.com/media/photo-s/07/20/cc/e6/andersen-bakery.jpg", "https://s3-media1.fl.yelpcdn.com/bphoto/VCNv1KduR4iAnZWDRH3_OA/ls.jpg", "https://s3-media3.fl.yelpcdn.com/bphoto/eJwl_fzrBzN07Xw1tPp2Gw/348s.jpg", "https://s3-media2.fl.yelpcdn.com/bphoto/1CZtXa7GBdulqjwXwp56Hw/348s.jpg", "https://i.ytimg.com/vi/NURnEejGKIs/maxresdefault.jpg", "http://www.twitsnaps.com/share/photo/1288058492_web.jpeg", "https://s3-media3.fl.yelpcdn.com/bphoto/nJ5eDsmtZwuL6THKGh4QIA/ls.jpg"]},
        {id: 18, name: "Gaslamp Cafe", rating: 0.9, location: {lat: 37.771790, lng: -122.416636},
          photos: ["https://www.40find.com/assets/images/venues/GaslampCafeInt3.jpg", "https://s3-media1.fl.yelpcdn.com/bphoto/CdfBLze7twD8XJ1HrXzK1g/168s.jpg", "http://www.gaslamp.org/wp-content/uploads/2016/08/gaslamp-cafe-frontage.jpg", "http://www.minardcapital.com/images/new/osf-img-upload/_framed/gaslamp-cafe-10785776-photo.jpg", "https://media-cdn.tripadvisor.com/media/photo-s/05/f1/db/c3/gaslamp-cafe.jpg", "https://igx.4sqi.net/img/general/200x200/3489701_7SnDAhGkmlGfBi0wdYG2TSJlcibA6ypeJIm1nbTJwqg.jpg", "https://b.zmtcdn.com/data/pictures/3/16862343/2e3ba9a36bc15939b64ee39844003c17.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A", "http://i.imgur.com/j6wPD.jpg", "https://s3-media1.fl.yelpcdn.com/bphoto/MfxRQj5GoRN9LCCQZT5KDw/180s.jpg", "https://s3-media4.fl.yelpcdn.com/bphoto/XPdaZyHbbT3UC4pB0H5PWg/o.jpg"]},
        {id: 19, name: "Paramo Coffee Company", rating: 0.9, location: {lat: 37.776867, lng: -122.415313},
          photos: ["https://s3-media2.fl.yelpcdn.com/bphoto/RU_nlNDSLlGVqNdPPRPlyg/348s.jpg", "https://s3-media2.fl.yelpcdn.com/bphoto/x_ABYeRmYfWeB_s_x89NPw/348s.jpg", "https://s3-media1.fl.yelpcdn.com/bphoto/6qtiUQ3PWLeABgHMJtjPEQ/348s.jpg", "https://s3-media2.fl.yelpcdn.com/bphoto/elxx-arYzkTuQMtt0OVF6w/ls.jpg", "https://s3-media2.fl.yelpcdn.com/bphoto/vSecEhR3tyuoRN-mm96RlQ/180s.jpg", "https://s3-media3.fl.yelpcdn.com/bphoto/9yLcDQO41PuRkGHekJpRvg/348s.jpg", "https://s3-media1.fl.yelpcdn.com/bphoto/XHOsV9OQgOT5q2PcSkU0nQ/180s.jpg", "https://s3-media4.fl.yelpcdn.com/bphoto/UhUiFDW5Lf0qxl80oOokTA/258s.jpg", "https://s3-media4.fl.yelpcdn.com/bphoto/wjYz1LQMnXWYxVqNFABBjQ/ls.jpg", "http://insidescoopsf.sfgate.com/files/2016/02/Paramo_Perennial1.jpg"]}
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
    //const {place} = this; // place prop
    //const {push} = this.context.router;
    //push(`/map/detail/${this.id}`)

    // for the new react router v4
    this.self.props.history.push(`/map/detail/${this.item.id}`)
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
            {/* Setting children routes to be rendered*/}
              <div className={styles.content}
                   style={{width: `70%`, float: `left`}}
              >
                <Switch>
                  <Route exact path="/">
                    <Map>
                      {children}
                    </Map>
                  </Route>
                  <Route path="/map/detail/:placeId" render={()=><Detail children={children} />}/>
                </Switch>
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
      <Router path="/" component={Container}>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/map">Map</Link></li>
          </ul>

          <hr/>
          <Switch>
            <Route path="/" component={Container} />
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
