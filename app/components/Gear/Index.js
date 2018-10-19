import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

import './Index.scss';

class Gear extends Component {
    render() {
        return(
            <div className='gear'>
                <SvgIcon iconName='gear' />
            </div>
        );
    }
}

module.exports = Gear;
