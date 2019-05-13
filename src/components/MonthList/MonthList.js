import React, { Component } from 'react';
import MonthItem from '../MonthItem/MonthItem';

class MonthList extends Component {
    render() {
        const htmlArray = this.props.months.map((months, where) => {
            return (
                <MonthItem
                    name={months.name}
                />
            );
        });


        return (
            <div>
                {htmlArray}
            </div>
        )

    }
}


export default MonthList;