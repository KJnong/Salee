// import React from 'react';
// import './App.css';
// import Header from './components/Header'
// import Form from './components/Form'
// import Sales from './components/Sales'
// import axios from 'axios'

// class App extends React.Component {
//   state =
//     {
//       salees: []
//     }

//   loadContent = async () => {

//     console.log(localStorage.getItem('auth-token'));
    
//     // const API_call = await fetch('http://localhost:5000/salee', {
//     //   method: 'GET',
//     //   Headers: { "auth-token": `bearer ${localStorage.getItem('auth-token')}` }
//     // })

//     const API_call = await axios({
//       method: 'get', //you can set what request you want to be
//       url: 'http://localhost:5000/salee',
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem('auth-token')}`
//       }
//     })

//     console.log(API_call);
    
//     // const {status} = API_call  
//     // if (status === 401) {
//     //   this.props.history.push('/sign-in')}
//     // const saleesObject = await API_call.json();


//     // this.setState({ salees: saleesObject });
//   }

//   componentWillMount() {
//     this.loadContent();
//   }

//   OnRefresh = () => this.loadContent();

//   render() {
//     return (
//       <div>
//         <Header />
//         <Form refresh={this.OnRefresh} />
//         <Sales salees={this.state.salees} />
//       </div>
//     );
//   }
// }

// export default App;
