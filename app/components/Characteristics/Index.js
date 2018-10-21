import React, { Component } from 'react';
import CharacteristicsThumb from './Thumb';

import './Index.scss';

class Characteristics extends Component {
    render() {
        return(
            <div className='characteristics'>
                <div className='characteristics__content'>
                    <CharacteristicsThumb
                        icon='fas fa-briefcase' 
                        title='Unique & Clean'
                        text='Nam liber tempor cum soluta nobis eleifend option congue nihilita imperdiet doming id.'
                    />
                    <CharacteristicsThumb
                        icon='fa fa-leaf' 
                        title='Responsive'
                        text='Nam liber tempor cum soluta nobis eleifend option congue nihilita imperdiet doming id.'
                    />
                    <CharacteristicsThumb
                        icon='fa fa-rocket' 
                        title='Great Usability'
                        text='Nam liber tempor cum soluta nobis eleifend option congue nihilita imperdiet doming id.'
                    />
                    <CharacteristicsThumb
                        icon='fa fa-eye' 
                        title='Retina Ready'
                        text='Nam liber tempor cum soluta nobis eleifend option congue nihilita imperdiet doming id.'
                    />
                </div>
            </div>
        );
    }
}

module.exports = Characteristics;
