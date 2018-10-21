import React, { Component } from 'react';

import Cards from '../Cards';
import './Index.scss';

class Projects extends Component {
    render() {
        return(
            <div className='projects'>
                <div className='projects__content'>
                    <div className='projects__title title'>
                        Our Projects
                    </div>
                    <div className='projects__text'>
                        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. I am text block. Click edit button to change this text.
                    </div>
                    <div className='projects__buttons'>
                        <div className='projects__button projects__button_active'>Show All</div>
                        <div className='projects__button'>Architecture</div>
                        <div className='projects__button'>Illustration</div>
                        <div className='projects__button'>Nature</div>
                        <div className='projects__button'>Photography</div>
                        <div className='projects__button'>Web Design</div>
                    </div>
                    <Cards className='projects__cards'/>
                </div>
            </div>
        );
    }
}

module.exports = Projects;
