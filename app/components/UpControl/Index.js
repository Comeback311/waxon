import React, { Component } from 'react';

import './Index.scss';

class UpControl extends Component {
    render() {
        return(
            <div className='up-control'>
                <i className='up-control__icon fa fa-angle-up'></i>
            </div>
        );
    }
}

module.exports = UpControl;
