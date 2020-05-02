import React from 'react';
import Moment from 'moment'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/ComponentStyle/Form.css'

const Sales = (props) => {
 
    
    return (
        <div>
            {props.salees.map(sale => (
                <div className="card">
                    <img className="card-img-top" src={`/api/${sale.imagePath}`} alt="Card image cap" />
                    <div className="card-body">
                        <h3 className="card-title">{sale.name}</h3>
                        <p><small className="card-text">{sale.item}</small></p>
                        <small className="card-text">Was: R{sale.was}</small>
                        <p><small className="card-text">Now: R{sale.now}</small></p>
                        <small>{Moment(sale.created).fromNow()}</small>
                    </div>
                </div>))}
        </div>
    )
}

export default Sales;

// <div className="card" style={style}>
// <div>
//     <small>{Moment(sale.created).fromNow()}</small>
// </div>
// <small>{sale.name}</small>
// <p>
//     <h5>{sale.content}</h5>
// </p>
// </div>))}