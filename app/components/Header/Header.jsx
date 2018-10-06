const React = require('react');
const Logo = require('./../Logo/Logo.jsx');
const HeaderMenu = require('./../HeaderMenu/HeaderMenu.jsx');
 
class Header extends React.Component {
    constructor(props){
        super(props);
    }
               
    render() {
        return(
            <div className='header'>
                <div className='header__content'>
                    <Logo />
                    <HeaderMenu />
                </div>
            </div>
        );
    }
}

module.exports = Header;
