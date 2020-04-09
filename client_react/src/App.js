import React from 'react';
import './App.css';
import Header from './components/Header'
import Form from './components/Form'
import Sales from './components/Sales'

class App extends React.Component {
  state =
    {
      salees: []
    }

  loadContent = async () => {
    const API_call = await fetch('http://localhost:5000/salee')
    const saleesObject = await API_call.json();

    this.setState({ salees: saleesObject });
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
