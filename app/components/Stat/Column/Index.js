import React, { Component } from 'react';

import './Index.scss';

class StatColumn extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { faIcon, count, name } = this.props;

        return(
            <div className='stat__column'>
                <div className='stat__icon'>
                    <i className={ faIcon }></i>
                </div>
                <div className='stat__count'>{ count }</div>
                <div className='stat__name'>{ name }</div>
            </div>
        );
    }
}

module.exports = StatColumn;
