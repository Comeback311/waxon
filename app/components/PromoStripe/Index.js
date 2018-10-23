import React, { Component } from 'react';

import './Index.scss';

class PromoStripe extends Component {
    render() {
        return(
            <div className='promo-stripe'>
                <div className='promo-stripe__content page'>
                    <div className='promo-stripe__left'>
                        <div className='promo-stripe__title'>
                            <div className='promo-stripe__title-header'>Waxom</div>
                            <div className='promo-stripe__title-text'>Multipurpose Theme</div>
                        </div>
                        <div className='promo-stripe__text'>
                            Our theme is a perfect solution for everyone!
                        </div>
                    </div>
                    <div className='promo-stripe__right'>
                    <div className='promo-stripe__button button'>LEARN MORE!</div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = PromoStripe;
