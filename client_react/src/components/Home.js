import React, { Component } from 'react'
import '../App.css';
import Header from './Header'
import Sales from './Sales'
import axios from 'axios'
import Search from './Search';


export default class Home extends Component {

    state =
    {
      salees: []
    }

    loadContent = async () => {

        const {data} = await axios.get('http://localhost:5000/salee')
    
        this.setState({ salees: data });
      }
    
      componentWillMount() {
        this.loadContent();
      }
      render() {
        return (
          <div>
            <Header />
            <Sales salees={this.state.salees} />
          </div>
        );
      }
}
