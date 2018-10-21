import React, { Component } from 'react';
import {
    Header, Landing, Gear, Characteristics, Ideas,
    PromoStripe, Projects, Presentation, PosterMobile,
    Stat, Posts, About, Footer, UpControl
} from './Components.js';

import './Index.scss';

class App extends Component {
    render() {
        return(
            <div className='content'>
                <Header />
                <Landing />
                <Gear />
                <Characteristics />
                <Ideas />
                <PromoStripe />
                <Projects />
                <Presentation />
                <PosterMobile />
                <Stat />
                <Posts />
                <About />
                <Footer />
                <UpControl />
            </div>
        );
    }
}

module.exports = App;
