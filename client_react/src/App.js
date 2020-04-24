import React from 'react';
import './App.css';
import Header from './components/Header'
import Form from './components/Form'
import Sales from './components/Sales'
import axios from 'axios'

class App extends React.Component {
  state =
    {
      salees: []
    }

  loadContent = async () => {


    const token = localStorage.getItem('auth-token');

    const {data} = await axios({
      method: 'get',
      url: 'http://localhost:5000/salee',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    this.setState({ salees: data });
  }

  componentWillMount() {
    this.loadContent();
  }

  OnRefresh = () => this.loadContent();

  render() {
    return (
      <div>
        <Header />
        <Form refresh={this.OnRefresh} />
        <Sales salees={this.state.salees} />
      </div>
    );
  }
}

export default App;
