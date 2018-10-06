const React = require('react');
const SvgIcon = require('./../SvgIcon/SvgIcon.jsx');

class HeaderMenuItem extends React.Component {
    constructor(props) {
        super(props);
    }

    getClassName() {
        let className = 'link';
        const props = this.props;

        className += (props.isActive ? ' link_active' : '');
        className += (props.iconName ? (' link_icon link_icon_' + props.iconName) : '');

        return className;
    }

    icon() {
        return this.props.iconName ? (<SvgIcon iconName={this.props.iconName} />) : ''
    }

    render() {
        return(
            <li className="menu__item">
                <a className={this.getClassName()}>
                    {this.props.title}
                    {this.icon()}
                </a>
            </li>
        );
    }
}

module.exports = HeaderMenuItem;
