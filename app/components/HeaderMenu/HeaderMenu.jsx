const React = require('react');
const HeaderMenuItem = require('./../HeaderMenuItem/HeaderMenuItem.jsx');

class HeaderMenu extends React.Component {
    constructor(props) {
        super(props);
    }
               
    render() {
        return(
            <div className='header__menu menu'>
                <ul className='menu'>
                    <HeaderMenuItem title='Home' isActive={true} />
                    <HeaderMenuItem title='Pages' />
                    <HeaderMenuItem title='Portfolio' />
                    <HeaderMenuItem title='Shortcodes' />
                    <HeaderMenuItem title='Blog' />
                    <HeaderMenuItem title='Shop' />
                    <HeaderMenuItem iconName='hand-bag' />
                    <HeaderMenuItem iconName='search' />
                </ul>
            </div>
        );
    }
}

module.exports = HeaderMenu;
