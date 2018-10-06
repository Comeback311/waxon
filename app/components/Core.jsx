const React = require('react');
const Header = require('./Header/Header.jsx');
const Landing = require('./Landing/Landing.jsx');
 
class Core extends React.Component {
    constructor(props){
        super(props);
    }
               
    render() {
        return(
            <div className='content'>
                <Header />
                <Landing />
                <div className='next' style={{backgroundColor: 'lightblue', height: '100vh', width: '100%'}}></div>
            </div>
        );
    }
}
 
module.exports = Core;
