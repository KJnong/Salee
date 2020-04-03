import React from 'react';
import './App.css';
import Header from './components/Header'
import Form from './components/Form'
import loadingImage from "./img/giphy.gif"
import Sales from './components/Sales'


class App extends React.Component 
{
  render()
  {    
    return (
      <div>
        {this.loadContent}
        <Header/>
        <Form/>
        <div className="loading">
              <img width="200px" src={loadingImage} alt="image"/>
        </div>
        <Sales/>
      </div>
    );
  }
}

export default App;
