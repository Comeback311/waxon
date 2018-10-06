const React = require('react');
 
class Landing extends React.Component {
    constructor(props){
        super(props);
    }
               
    render() {
        return(
            <div className='landing'>
                <div className='landing__content'>
                    <div className='landing__title landing__title_medium'>Unique and Modern Design</div>
                    <div className='landing__title landing__title_big'>Welcome to Waxom</div>
                    <div className='landing__title landing__title_small'>Waxom is a perfect WordPress theme for your awesome personal portfolio.</div>
                    <div className='button button_size_big landing__button'><a>SEE MORE</a></div>
                </div>
                <div className='landing__bullets'>
                    <div className="landing__bullet-item"></div>
                    <div className="landing__bullet-item landing__bullet-item_active"></div>
                    <div className="landing__bullet-item"></div>
                </div>
            </div>
        );
    }
}

module.exports = Landing;
