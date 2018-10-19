import React, { Component } from 'react';
import { Header, Landing, Gear, Characteristics } from './Components.js';

import './Index.scss';

class App extends Component {
    render() {
        const style = { height: '100vw', background: '#eee' };

        return(
            <div className='content'>
                <Header />
                <Landing />
                <Gear />
                <Characteristics />
                <div style={style}></div>
            </div>
        );
    }
}

module.exports = App;
