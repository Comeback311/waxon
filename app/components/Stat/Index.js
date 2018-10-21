import React, { Component } from 'react';

import StatColumn from './Column';
import './Index.scss';

class Stat extends Component {
    getStatData() {
        return [{
            faIcon: 'fa fa-users',
            count: 3587,
            name: 'Satisfied Clients'
        }, {
            faIcon: 'fa fa-coffee',
            count: 207,
            name: 'Cups of Coffee'
        }, {
            faIcon: 'far fa-comments',
            count: 2150,
            name: 'Blog Posts'
        }, {
            faIcon: 'fa fa-thumbs-up',
            count: 871,
            name: 'Likes'
        }]
    }

    render() {
        const statData = this.getStatData();

        return(
            <div className='stat'>
                <div className='stat__content'>
                    {
                        statData.map(statItem => {
                            const { faIcon, count, name } = statItem;

                            return <StatColumn 
                                key = { name }
                                faIcon = { faIcon }
                                count = { count }
                                name = { name }
                            />
                        })
                    }
                </div>
            </div>
        );
    }
}

module.exports = Stat;
