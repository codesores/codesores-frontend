import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Index from '../views/index.js'
import Issues from '../views/issues/show.js'
import Header from './Header'
import Sidebar from './Sidebar'
import * as utils from '../utils';


// const Main = () => (
//   <main>
//     <Switch>
//       <Route exact path='/index' component={Index}/>
//       <Route path='/issues' component={Issues}/>
//     </Switch>
//   </main>
// )
//
// export default Main

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: null
    };

  }

  componentDidMount() {
    this.fetchUserDetails();
  }

  fetchUserDetails() {
    utils.fetchUserDetails({ token: this.props.token })
      .then(info => {
        this.setState({ info })
      });
  }

  render() {
    const {
      info
    } = this.state;

    return (
      <div className='Main'>
        <Header
          info={info}
        />
        <div className='Main-content'>
          <Sidebar
            info={info}
          />
        </div>
      </div>
    );
  }

}

export default Main;
