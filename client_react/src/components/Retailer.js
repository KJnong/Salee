import React from 'react';
import '../App.css';
import Header from './Header'
import Form from './Form'
import axios from 'axios'
import auth from './PrivateRoute/auth'
import Retails from './Retails';

class App extends React.Component {
  state =
    {
      salees: []
    }

  loadContent = async () => {
   
    const token = localStorage.getItem('auth-token');

    const {data} = await axios({
      method: 'get',
      url: 'http://localhost:5000/retailer',
      headers: {
        Authorization: `Bearer ${token}`
      }
      
      
    })

    this.setState({ salees: data });
  }

  logout = (event)=>{
    event.preventDefault()
    auth.logout(()=>{
      localStorage.clear();
      this.props.history.push('/')
    })
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
        <Retails salees={this.state.salees} />
        <button onClick={this.logout} class="btn btn-info btn-lg">
          <span class="glyphicon glyphicon-log-out"></span> Log out
        </button>
      </div>
    );
  }
}

export default App;
