import React, { Component } from 'react';

import CardsItem from '../Cards/Item';
import './Index.scss';

class Posts extends Component {
    getPostsData() {
        return [{
            image: 'assets/images/guy.jpg',
            date: {
                day: 14,
                month: 'Feb'
            },
            title: {
                text: 'Blog Post with Carousel',
                size: 'big'
            },
            categories: {
                text: 'Mirum est notare quam litte goth, quam nunc puta parum claram, antep littera for human per...',
                offset: true
            },
            more: true,
            horizontal: true,
            hovered: {
                search: true
            }
        }, {
            image: 'assets/images/mountain.jpg',
            date: {
                day: 13,
                month: 'Feb'
            },
            title: {
                text: 'Quote Post Format',
                size: 'big'
            },
            categories: {
                text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a...',
                offset: true
            },
            more: true,
            horizontal: true,
            hovered: {
                search: true
            }
        }, {
            image: 'assets/images/business.jpg',
            date: {
                day: 27,
                month: 'Jan'
            },
            title: {
                text: 'Video Blog post',
                size: 'big'
            },
            categories: {
                text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a...',
                offset: true
            },
            more: true,
            horizontal: true,
            hovered: {
                search: true
            }
        }];
    }

    render() {
        const postsData = this.getPostsData();

        return(
            <div className='posts'>
                <div className='posts__content'>
                    <div className='posts__title title'>Recent Posts</div>
                    <div className='posts__text'>
                        Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum notare quam littera.
                    </div>
                    <div className='posts__cards'>
                        {
                            postsData.map(post => {
                                const { image, title, categories, more, date, horizontal, hovered } = post;

                                return <CardsItem
                                    key = { title.text }
                                    image = { image }
                                    title = { title }
                                    categories = { categories }
                                    date = { date }
                                    more = { more }
                                    horizontal = { horizontal }
                                    hovered = { hovered }
                                />;
                            })
                        }
                        <div className='posts__cards-arrows'>
                            <div className='posts__cards-arrow posts__cards-arrow-left'>
                                <i className='posts__cards-arrow-icon-left fas fa-angle-left'></i>
                            </div>
                            <div className='posts__cards-arrow posts__cards-arrow-right'>
                                <i className='posts__cards-arrow-icon-right fas fa-angle-right'></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Posts;
