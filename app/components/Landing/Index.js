import React, { Component } from 'react';

import './Index.scss';

class Landing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [{
                active: true
            }, {
                active: false
            }, {
                active: false
            }]
        };
    }

    onMouseEnter(e) {
        const order = Number(e.target.dataset.order);

        if (!order) return;
        let items = this.state.items;

        items[order].active = true;
        this.setState({ items });
    }

    onMouseLeave(e) {
        const order = Number(e.target.dataset.order);

        if (!order) return;
        let items = this.state.items;

        items[order].active = false;
        this.setState({ items });
    }

    render() {
        return(
            <div className='landing page'>
                <div className='landing__content'>
                    <div className='landing__title landing__title_medium'>Unique and Modern Design</div>
                    <div className='landing__title landing__title_big'>Welcome to Waxom</div>
                    <div className='landing__title landing__title_small'>Waxom is a perfect WordPress theme for your awesome personal portfolio.</div>
                    <div className='button landing__button'><a>SEE MORE</a></div>
                </div>
                <div className='landing__bullets'>
                    {
                        this.state.items.map((item, index) => {
                            const className = 'landing__bullet-item' +
                                (item.active ? ' landing__bullet-item_active' : '');

                            const onMouseEnter = !this.active && this.onMouseEnter.bind(this);
                            const onMouseLeave = !this.active && this.onMouseLeave.bind(this);

                            return <div
                                key = { index }
                                className = { className }
                                onMouseEnter = { onMouseEnter }
                                onMouseLeave = { onMouseLeave }
                                data-order = { index }
                            ></div>;
                        })
                    }
                </div>
                <div className='landing__scroller'>
                    <div className='landing__scroller-circle'></div>
                </div>
            </div>
        );
    }
}

module.exports = Landing;
