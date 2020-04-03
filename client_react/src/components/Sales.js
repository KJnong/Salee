import React from 'react';

class Sales extends React.Component
{
    constructor() 
    {
        super();

        this.state = 
      {
          name : 'aa',
          content : 'dd',
          time : 'aa'
      }
        
    }

    loadContent = async () =>
    {
      const rawSales = await fetch('http://localhost:5000/salee')
      const sales = await rawSales.json();

      this.setState( 
      {
          name : sales.name,
          content : sales.content,
          time : sales.created
      })

      console.log(this.state);
      
    }

    componentDidMount(){
        this.loadContent();
    }
    render()
    {
        return(
            <div>
              <small>{this.state.time}</small>
              <small>{this.state.name}</small>
              <p>
                  <h5>{this.state.content}</h5>
              </p>
            </div>)
    }

}

export default Sales;