import React from 'react';
import Moment from 'moment'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/ComponentStyle/Form.css'

const Retails = (props) => {

    
    return (
        <div>
            {props.salees.map(sale => (
                <div className="card">
                    <img className="card-img-top" src={`http://localhost:5000/${sale.imagePath}`} alt="Card image cap" />
                    <div className="card-body">
                        <p><small className="card-text">{sale.item}</small></p>
                        <small className="card-text">Was: R{sale.was}</small>
                        <p><small className="card-text">Now: R{sale.now}</small></p>
                        <small>{Moment(sale.created).fromNow()}</small>
                    </div>
                    <button type="button" class="btn btn-danger">Remove</button>
                </div>))}
        </div>
    )
}

export default Retails;