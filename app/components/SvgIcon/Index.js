import React, { Component } from 'react';
import Icons from '../Icons';

class SvgIcon extends Component {
    constructor(props) {
        super(props);
    }

    getSvgPath() {
        const iconName = this.props.iconName;

        return iconName in Icons && Icons[iconName] || '';
    }
     
    render() {
        return(this.getSvgPath());
    }
}

module.exports = SvgIcon;
