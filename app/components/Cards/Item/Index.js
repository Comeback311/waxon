import React, { Component } from 'react';

class CardsItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { image, title, categories, likes, date, more, hovered } = this.props;

        let titleClassName = 'cards__title cards__title_size_' +
            (title && title.size || 'default') +
            (hovered && hovered.bottomBlack ? ' cards__title_hover_true' : '');

        let categoriesClassName = 'cards__categories' +
            (categories.offset && ' cards__categories_offset' || '') +
            (hovered && hovered.bottomBlack ? ' cards__categories_hover_true': '');

        return(
            <div className='cards__item'>
                <div className='cards__top'>
                    {
                        (date && date.day && date.month) &&
                            <div className='cards__calendar'>
                                <div className='cards__calendar-day'>{ date.day }</div>
                                <div className='cards__calendar-month'>{ date.month }</div>
                            </div>
                    }
                    <img className='cards__image' src={ image } />
                    <div className='cards__overlay'></div>
                    <div className='cards__hovered-actions'>
                        {
                            hovered && hovered.link &&
                                <i className='cards__hovered-action-item fa fa-link'></i>
                        }
                        {
                            hovered && hovered.search &&
                                <i className='cards__hovered-action-item fa fa-search'></i>
                        }
                    </div>
                </div>
                <div className = {
                    'cards__bottom' +
                    (hovered && hovered.bottomBlack ?
                    ' cards__bottom_hover_true' : '')
                }>
                    <div className='cards__text'>
                        <div className={ titleClassName }>{ title.text }</div>
                        <div className={ categoriesClassName }>{ categories.text }</div>
                        {
                            more &&
                                <div className='cards__read-more'>
                                    <div className='cards__read-more-text'>Read more</div>
                                    <i className='cards__read-more-button fas fa-caret-right'></i>
                                </div>
                        }
                    </div>
                    { likes &&  
                        <div className='cards__actions'>
                            <div className='cards__likes'>
                                <i className='cards__likes-icon far fa-heart'></i>
                            </div>
                            <div className='cards__likes-counter'>{ likes }</div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

module.exports = CardsItem;
