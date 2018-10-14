import React, { Component } from 'react';

import './Logo.scss';
 
class Logo extends Component {
    render() {
        return(
            <div className='header__logo'>
                <div className='logo'></div>
            </div>
        );
    }
}

module.exports = Logo;
