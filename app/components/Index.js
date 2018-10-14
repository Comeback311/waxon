import React, { Component } from 'react';
import Header from './Header';
import Landing from './Landing';

import './Index.scss';
 
class App extends Component {
    render() {
        const styles = {
            backgroundColor: 'lightblue', 
            height: '100vh', 
            width: '100%'
        };

        return(
            <div className='content'>
                <Header />
                <Landing />
                <div 
                    className='next' 
                    style = { styles }
                >
                </div>
            </div>
        );
    }
}
 
module.exports = App;
