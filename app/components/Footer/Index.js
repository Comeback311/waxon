import React, { Component } from 'react';

import './Index.scss';

class Footer extends Component {
    render() {
        return(
            <div className='footer'>
                <div className='footer__content'>
                    <div className='footer__copy'>
                        Copyright 2018 Waxom, Created by 
                        <a className='footer__author' href='https://github.com/comeback311' target='_blank'>Avdeev Denis</a>
                    </div>
                    <div className='footer__media'>
                        <a href='https://vk.com/booomka' target='_blank' className='footer__media-item footer__media-item_active'>
                            <i className='footer__media-item-icon fab fa-vk'></i>
                        </a>
                        <a className='footer__media-item'>
                            <i className='footer__media-item-icon fab fa-facebook'></i>
                        </a>
                        <a className='footer__media-item'>
                            <i className='footer__media-item-icon fab fa-twitter'></i>
                        </a>
                        <a href='https://github.com/comeback311' target='_blank' className='footer__media-item footer__media-item_active'>
                            <i className='footer__media-item-icon fab fa-github'></i>
                        </a>
                        <a className='footer__media-item'>
                            <i className='footer__media-item-icon fab fa-youtube'></i>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Footer;
