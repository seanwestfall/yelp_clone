import React from 'react';
import {Link} from 'react-router-dom';

import styles from './styles.module.css';

export class Header extends React.Component {
  render() {
    return (
      <div className={"topbar"}>
        <a href="/"><h1>Yelp</h1></a>
        <section>
          {/* Fullstack.io */}
        </section>
      </div>
    )
  }
}

export default Header
