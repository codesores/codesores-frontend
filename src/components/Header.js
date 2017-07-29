import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
  handleClickLogOut() {
    window.location.href = window.location.href.replace(/\?.*$/, '');
  }

  render() {
    const { info } = this.props;

    return (
      <AppBar title='CodeSores' leftIcon='menu'>
        <Navigation type='horizontal'>
          {info != null && (
            <span>
              <Avatar className='Header-userAvatar'
                image={info.avatar_url}
              />
              <span className='Header-userName'>
                {info.name}
              </span>
            </span>
          )}
          <Link
            href='#'
            active
            label='Log out'
            icon='exit_to_app'
            className='Header-link'
            onClick={this.handleClickLogOut}
          />
        </Navigation>
      </AppBar>
    );
  }
}
// const Header = () => (
//   <header>
//     <nav>
//       <ul>
//         <li><Link to='/index'>Home</Link></li>
//         <li><Link to='/issues'>Issues</Link></li>
//         <li><button onClick={this.props.logOut}>
//   Log out
// </button></li>
//       </ul>
//     </nav>
//   </header>
// )

export default Header
