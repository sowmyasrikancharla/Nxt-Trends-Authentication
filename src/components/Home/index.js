// Write your JS code here
import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="home-con">
          <div className="left-con">
            <h1 className="head">Clothes That Get YOU Noticed</h1>
            <p className="text">
              Fashion is part of the daily air and it does not quite help thar
              it changes all the time.Clothes have always been a marker of the
              era and we are in a revolution.Your fashion makes you been seen
              and heard that way you are. So, celebrate the seasons new and
              exciting fashion in your own way.
            </p>
            <button className="logout-but">Shop Now</button>
          </div>
          <div className="right-con">
            <img
              className="img-set"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt=" clothes that get you noticed"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default Home
