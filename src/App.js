import React, { Component } from 'react';
import './App.css';
import { getQueryParams } from './utils';
import Header from './components/Header'
import Login from './components/Login';
import Main from './components/Main'
import axios from 'axios'

class App extends Component {
  constructor() {
    super();

    const params = getQueryParams();
    this.state = { token: params.token };
  }

  isLoggedIn() {
    return !!this.state.token;
  }

  render() {
    return (
      <div className='App'>
        {this.isLoggedIn()
          ? <Main token={this.state.token} />
          : <Login />
        }
      </div>
    );
  }
}

export default App;


// class App extends Component {
//   constructor() {
//     super();
//
//     const params = getQueryParams();
//     this.state = {
//       token: params.token };
//
//     this.logOut = this.logOut.bind(this);
//   }
//
//   isLoggedIn() {
//     return !!this.state.token;
//   }
//
//   logOut() {
//     this.setState({token: null}, this.render);
//   }
//
//   render() {
//     return (
//       <div className='App'>
//       <Header logOut={this.logOut} />
//         {this.isLoggedIn()
//           ? <button onClick={this.logOut()}>
//     Log out
//   </button>
//           : <Login />
//         }
//       </div>
//     );
//   }
// }
//
//
// // const App = () => (
// //   <div>
// //     <Header />
// //     <Main />
// //   </div>
// // )
//
// export default App
