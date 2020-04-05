import React from 'react';
import './App.css';
import Header from './components/Header'
import Form from './components/Form'
import Sales from './components/Sales'


class App extends React.Component 
{
  render()
  {    
    return (
      <div>
        <Header/>
        <Form/>
        <Sales/>
      </div>
    );
  }
}

export default App;
