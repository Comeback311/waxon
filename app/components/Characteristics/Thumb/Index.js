import React, { Component } from 'react';

import './Index.scss';

class CharacteristicsThumb extends Component {
    constructor(props) {
        super(props);
    }

    componentIcon() {
        const icon = this.props.icon;

        return icon && 
            <div className='characteristics__icon'>
                <i className={ icon + ' characteristics__icon-content' }></i>
            </div>;
    }

    componentTitle() {
        const title = this.props.title;

        return title &&
            <div className='characteristics__title'>{ title }</div>;
    }
    
    componentText() {
        const text = this.props.text;

        return text &&
            <div className='characteristics__text'>{ text }</div>;
    }

    render() {
        return(
            <div className='characteristics__thumb'>
                { this.componentIcon() }
                { this.componentTitle() }
                { this.componentText() }
            </div>
        );
    }
}

module.exports = CharacteristicsThumb;
