import React, { Component } from 'react';

import './Index.scss';

class About extends Component {
    render() {
        return(
            <div className='about'>
                <div className='about__content'>
                    <div className='about__item about__description'>
                        <img className='about__logo' src='assets/images/logo.png' />
                        <div className='about__description-text'>
                            Waxom is a powerful multipurpose WordPress theme that can be adapted for any kind of website. With Visual Composer you can create any page layout.
                        </div>
                        <div className='about__description-text'>
                            The theme is fully responsive so it looks great on any device!
                        </div>
                    </div>
                    <div className='about__item about__column'>
                        <div className='about__title'>Recent Posts</div>
                        <ul className='about__list'>
                            <li className='about__list-item about__list-item_hovered'>
                                <div className='about__list-item-title'>Standard Blog Post</div>
                                <div className='about__list-item-date'>Feb 14, 2018</div>
                            </li>
                            <li className='about__list-item about__list-item_hovered'>
                                <div className='about__list-item-title'>Video Blog Post</div>
                                <div className='about__list-item-date'>Jan 27, 2018</div>
                            </li>
                            <li className='about__list-item about__list-item_hovered'>
                                <div className='about__list-item-title'>Simple Blog Post</div>
                                <div className='about__list-item-date'>Jan 13, 2018</div>
                            </li>
                        </ul>
                    </div>
                    <div className='about__item about__column'>
                            <div className='about__title'>Pages</div>
                            <ul className='about__list'>
                                <li className='about__list-item about__list-item_hovered'>
                                    <div className='about__list-item-title'>Home Portfolio Veented Slider</div>
                                </li>
                                <li className='about__list-item about__list-item_hovered'>
                                    <div className='about__list-item-title'>About us 4</div>
                                </li>
                                <li className='about__list-item about__list-item_hovered'>
                                    <div className='about__list-item-title'>Blog</div>
                                </li>
                                <li className='about__list-item about__list-item_hovered'>
                                    <div className='about__list-item-title'>Contact</div>
                                </li>
                            </ul>
                        </div>
                    <div className='about__item about__contacts'>
                        <div className='about__title'>Contact info</div>
                        <ul className='about__list'>
                            <li className='about__list-item about__list-item_hovered'>
                                <i className='about__list-item-icon fa fa-map-marker'></i>
                                <div className='about__list-item-title'>Manchester Road 123-78B, Silictown 7854MD, Great Country</div>
                            </li>
                            <li className='about__list-item about__list-item_hovered'>
                                <i className='about__list-item-icon fa fa-phone'></i>
                                <div className='about__list-item-title'>+46 123 456 789</div>
                            </li>
                            <li className='about__list-item about__list-item_hovered'>
                                <i className='about__list-item-icon fa fa-envelope'></i>
                                <div className='about__list-item-title'>http://hello@sitename.com</div>
                            </li>
                            <li className='about__list-item about__list-item_hovered'>
                                <i className='about__list-item-icon fa fa-globe'></i>
                                <div className='about__list-item-title'>http://www.sitename.com</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = About;
