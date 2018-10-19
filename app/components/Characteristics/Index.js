import React, { Component } from 'react';

import './Index.scss';

class Characteristics extends Component {
    render() {
        return(
            <div className='characteristics'>
                <div className='characteristics__content'>
                    <div className='characteristics__thumb'>
                        <div className='characteristics__icon'></div>
                        <div className='characteristics__title'>Unique & Clean</div>
                        <div className='characteristics__text'>
                            Nam liber tempor cum soluta nobis eleifend option congue nihilita imperdiet doming id.
                        </div>
                    </div>
                    <div className='characteristics__thumb'>
                        <div className='characteristics__icon'></div>
                        <div className='characteristics__title'>Responsive</div>
                        <div className='characteristics__text'>
                            Nam liber tempor cum soluta nobis eleifend option congue nihilita imperdiet doming id.
                        </div>
                    </div>
                    <div className='characteristics__thumb'>
                        <div className='characteristics__icon'></div>
                        <div className='characteristics__title'>Great Usability</div>
                        <div className='characteristics__text'>
                            Nam liber tempor cum soluta nobis eleifend option congue nihilita imperdiet doming id.
                        </div>
                    </div>
                    <div className='characteristics__thumb'>
                        <div className='characteristics__icon'></div>
                        <div className='characteristics__title'>Retina Ready</div>
                        <div className='characteristics__text'>
                            Nam liber tempor cum soluta nobis eleifend option congue nihilita imperdiet doming id.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Characteristics;
