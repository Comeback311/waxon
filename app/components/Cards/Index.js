import React, { Component } from 'react';

import CardsItem from './Item';
import './Index.scss';

class Cards extends Component {
    constructor(props) {
        super(props);
    }

    getClassName() {
        const { className } = this.props;

        // cards projects__cards
        return 'cards' + (className ? ` ${className}` : '');
    }

    getCardItems() {
        return [{
            image: 'assets/images/phone.jpg',
            title: {
                text: 'The Phone'
            },
            categories: {
                text: 'Illustration, Web Design'
            },
            likes: 161
        }, {
            image: 'assets/images/mountain.jpg',
            title: {
                text: 'Ocean Rocks'
            },
            categories: {
                text: 'Nature, Photography'
            },
            likes: 163
        }, {
            image: 'assets/images/architecture.jpg',
            title: {
                text: 'Flatiron Building'
            },
            categories: {
                text: 'Architecture, Photography'
            },
            likes: 87
        }, {
            image: 'assets/images/seagulls.jpg',
            title: {
                text: 'Fantastic Flight'
            },
            categories: {
                text: 'Nature'
            },
            likes: 56
        }, {
            image: 'assets/images/magazine.jpg',
            title: {
                text: 'Magazine'
            },
            categories: {
                text: 'Web Design'
            },
            likes: 72
        }, {
            image: 'assets/images/guy.jpg',
            title: {
                text: 'Cool Bike'
            },
            categories: {
                text: 'Illustration, Nature'
            },
            likes: 45
        }];
    }

    render() {
        const CardItems = this.getCardItems();

        return(
            <div className={this.getClassName()}>
                {
                    CardItems.map(CardItem => {
                        const { image, title, categories, likes } = CardItem;

                        let item = <CardsItem
                            key = { title.text }
                            image = { image }
                            title = { title }
                            categories = { categories }
                            likes = { likes }
                        />;

                        return ( item );
                    })
                }
                <div className='cards__more'>
                    <div className='cards__more-button button'>load more</div>
                </div>
            </div>
        );
    }
}

module.exports = Cards;
