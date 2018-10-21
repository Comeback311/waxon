import React, { Component } from 'react';

import './Index.scss';

class Ideas extends Component {
    render() {
        return(
            <div className='ideas'>
                <div className='ideas__content'>
                    <div className='ideas__title title'>
                        Waxom is realization of your ideas
                    </div>
                    <div className='ideas__text'>
                        This is an awesome theme! I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur.
                    </div>
                    <div className='ideas__templates'>
                        <img className='ideas__templates-image' src='assets/images/templates.png'></img>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Ideas;
