import React, { Component } from 'react';
import Logo from '../Logo';
import HeaderMenu from '../HeaderMenu/Index';

import './Header.scss'; 

class Header extends Component {
    render() {
        return(
            <div className='header'>
                <div className='header__content'>
                    <Logo />
                    <HeaderMenu />
                </div>
            </div>
        );
    }
}

module.exports = Header;
