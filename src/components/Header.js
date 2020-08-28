import React from 'react';
import './Header.scss'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <header>
      <div className="logo">
      </div>
      <div className="links">
        <ul>

          <Link to={'/'}>Home</Link>
          { props.currentUser ? 
            <>
              <li><Link to={'/tools/new'}>Add New Tool</Link></li>
              <li><Link to={'/tools/ToolList'}>List of Tools</Link></li>
              
             
              <li><a href="/logout" onClick={ props.logout }>Log Out</a></li>
            </>
          :
            <>
              
              <li><Link to={'/register'}>Register</Link></li>
              <li><Link to={'/login'}>Login</Link></li>
            </>
          }
        </ul>
      </div>
    </header>
  );
}

export default Header;
