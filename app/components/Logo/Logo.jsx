const React = require('react');
 
class Logo extends React.Component {
    constructor(props){
        super(props);
    }
               
    render() {
        return(
            <div className='header__logo'>
                <div className='logo'></div>
            </div>
        );
    }
}

module.exports = Logo;
