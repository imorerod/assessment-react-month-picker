import React, { Component } from 'react';

class MonthItem extends Component {
constructor(props){
    super(props);

//     this.state = {
//         month:
//     }

// }

clickMonth (event) {
    console.log(('clicked', {monthName});
}
    render() {
    const monthName = ({this.props.name})
        return (

            <div className ="month" onClick={this.clickMonth}>
                {monthName}
            </div>
        )

    }

}
}

export default MonthItem;