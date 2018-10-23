import React, { Component } from 'react';

import './Index.scss';

class Presentation extends Component {
    render() {
        return(
            <div className='presentation'>
                <div className='presentation__overlay'></div>
                <div className='presentation__content page'>
                    <div className='presentation__play'>
                        <i className="fa fa-play presentation__play-icon"></i>
                    </div>
                    <div className='presentation__title'>Waxom Video Presentation</div>
                    <div className='presentation__text'>
                        Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum notare quam littera.
                    </div>
                    <div className='presentation__duration'>03:46</div>
                </div>
            </div>
        );
    }
}

module.exports = Presentation;
