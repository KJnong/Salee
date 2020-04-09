import React from 'react';
import Moment from 'moment'
import '../App.css';

const Sales = (props) => {

    return (
        <div className='sales'>
            {props.salees.map(sale => (
                <div>
                    <div>
                        <small>{Moment(sale.created).fromNow()}</small>
                    </div>
                    <small>{sale.name}</small>
                    <p>
                        <h5>{sale.content}</h5>
                    </p>
                </div>))}
        </div>)
}

export default Sales;