import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
// import AppBar from 'react-toolbox/lib/app_bar/AppBar';
// import Navigation from 'react-toolbox/lib/navigation/Navigation';
// import Link from 'react-toolbox/lib/link/Link';
// import Avatar from 'react-toolbox/lib/avatar/Avatar';
import './Header.css';

class Header extends Component {
  handleClickLogOut() {
    window.location.href = window.location.href.replace(/\?.*$/, '');
  }

  render() {
    const { info } = this.props;
    return(
      <div>
      <a
        href='#'
        active
        label='Log out'
        icon='exit_to_app'
        className='Header-link'
        onClick={this.handleClickLogOut}
      />
      </div>
    )
  }
}
//   render() {
//     const { info } = this.props;
//
//     return (
//       <AppBar title='CodeSores' leftIcon='menu'>
//         <Navigation type='horizontal'>
//           {info != null && (
//             <span>
//               <Avatar className='Header-userAvatar'
//                 image={info.avatar_url}
//               />
//               <span className='Header-userName'>
//                 {info.name}
//               </span>
//             </span>
//           )}
//           <Link
//             href='#'
//             active
//             label='Log out'
//             icon='exit_to_app'
//             className='Header-link'
//             onClick={this.handleClickLogOut}
//           />
//         </Navigation>
//       </AppBar>
//     );
//   }
// }
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

export default Header;
