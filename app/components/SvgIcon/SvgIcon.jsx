const React = require('react');
const icons = require('../Icons/Icons.jsx');

class SvgIcon extends React.Component {
    constructor(props) {
        super(props);
    }

    getSvgPath() {
        return icons[this.props.iconName] || '';
    }
     
    render() {
        return(this.getSvgPath());
    }
}

module.exports = SvgIcon;
