import React from 'react';

class Sales extends React.Component {
    state =
        {
            salees: []
        }

    loadContent = async () => {
        const rawSales = await fetch('http://localhost:5000/salee')
        const sales = await rawSales.json();

        this.setState({ saless: sales });

        console.log(this.state);

    }

    componentDidMount() {
        this.loadContent();
    }
    render() {

        const { saless } = this.state;

        if (!!saless) {

            return (
                <div>
                    {saless.map(sale => (
                        <div>
                            <small>{sale.time}</small>
                            <small>{sale.name}</small>
                            <p>
                                <h5>{sale.content}</h5>
                            </p></div>))}
                </div>)
        }
        else {
            return <p>Ther are no Saless</p>
        }
    }

}

export default Sales;