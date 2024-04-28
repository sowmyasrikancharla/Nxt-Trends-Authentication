// Write your JS code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="header-con">
        <img
          className="logo-set"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
        <div className="header-right-con">
          <Link to="/">
            {' '}
            <h3 className="header-label">Home</h3>
          </Link>
          <h3 className="header-label">Products</h3>
          <h3 className="header-label">Cart</h3>
          <button className="logout-but">Logout</button>
        </div>
      </div>
    )
  }
}
export default Header
