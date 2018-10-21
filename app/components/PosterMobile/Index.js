import React, { Component } from 'react';

import './Index.scss';

class PosterMobile extends Component {
    render() {
        return (
            <div className='poster-mobile'>
                <div className='poster-mobile__content'>
                    <div className='poster-mobile__left'>
                        <img src='assets/images/iphone.png' />
                    </div>
                    <div className='poster-mobile__right'>
                        <div className='poster-mobile__title'>Excellent for Mobile Devices.</div>
                        <div className='poster-mobile__text'>
                            Qisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius claritas.
                        </div>
                        <ul className='poster-mobile__list'>
                            <li className='poster-mobile__list-item'>
                                Nam consectetur adipiscing elit ullamcorper mattis.
                            </li>
                            <li className='poster-mobile__list-item'>
                                Nluctus nec ullamcorper mattis, pulvinar dapibus leo
                            </li>
                            <li className='poster-mobile__list-item'>
                                Pellentesque nec molestie dolor, vel varius mauris.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = PosterMobile;
