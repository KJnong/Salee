import React from 'react';
import Moment from 'moment'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/ComponentStyle/Form.css'
import image from '../img/IMAGE.jpg'

const Sales = (props) => {

    
    return (
        <div>
            {props.salees.map(sale => (
                <div class="card">
                    <img class="card-img-top" src={image} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">{sale.name}</h5>
                        <p class="card-text">{sale.content}.</p>
                        <a href="#" class="btn btn-primary">Details</a>
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