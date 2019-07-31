import React, { Component } from 'react';
import './HeroAngled.scss';


export default class HeroAngled extends Component {
  render() {
    return(
      <section className='hero-angled'>
        <h1 className='hero-angled__heading'>Title goes here</h1>
        <p className='hero-angled__tagline'>Tagline is a short line that elaborates on the title</p>
      </section>
    );
  }
}
