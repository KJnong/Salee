import React from 'react';
import Moment from 'moment'
import '../App.css';

class Sales extends React.Component {
    state =
        {
            salees: []
        }

    loadContent = async () => {
        const API_call = await fetch('http://localhost:5000/salee')
        const saleesObject = await API_call.json();

        this.setState({ salees: saleesObject });
    }

    componentDidMount() {
        this.loadContent();
    }
    render() {

        const { salees } = this.state;

        if (!!salees) {

            return (
                <div className = 'sales'>
                    {salees.map(sale => (
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
        else {
            return <p>Salees failed to load</p>
        }
    }

}

export default Sales;