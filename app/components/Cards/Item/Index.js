import React, { Component } from 'react';

import './Index.scss';

class CardsItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { image, title, categories, likes, date, more, horizontal } = this.props;

        const titleClassName = 'cards__title cards__title_size_' + (title && title.size || 'default');
        const categoriesClassName = 'cards__categories' + (categories.offset && ' cards__categories_offset' || '');
        const cardsItemClassName = 'cards__item' + (horizontal && ' cards__item_type_horizontal' || '');

        return(
            <div className={ cardsItemClassName }>
                <div className='cards__top'>
                    {
                        (date && date.day && date.month) &&
                            <div className='cards__calendar'>
                                <div className='cards__calendar-day'>{ date.day }</div>
                                <div className='cards__calendar-month'>{ date.month }</div>
                            </div>
                    }
                    <img className='cards__image' src={ image } />
                </div>
                <div className='cards__bottom'>
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
                                <i className='far fa-heart'></i>
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
