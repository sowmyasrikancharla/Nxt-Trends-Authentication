// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', isMatched: false, errorMsg: ''}

  updateUsername = event => {
    this.setState({username: event.target.value})
  }

  updatePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.setState({isMatched: true, errorMsg: data.error_msg})
    }
  }

  render() {
    const {username, password, isMatched, errorMsg} = this.state
    console.log(isMatched)
    return (
      <div className="main-con">
        <img
          className="website-login-css"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png "
          alt="website login"
        />
        <form className="login-form-con" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
            alt="website logo"
            className="login-logo"
          />
          <label htmlFor="username" className="label">
            USERNAME
          </label>
          <input
            type="text"
            id="username"
            className="inp-con"
            placeholder="Username"
            onChange={this.updateUsername}
          />
          <label htmlFor="password" className="label">
            PASSWORD
          </label>
          <input
            type="password"
            id="password"
            className="inp-con"
            placeholder="Password"
            onChange={this.updatePassword}
          />
          <button type="submit" className="login-but">
            Login
          </button>
          {isMatched ? (
            <p className="error"> {errorMsg} </p>
          ) : (
            <p className="dummy">.</p>
          )}
        </form>
      </div>
    )
  }
}

export default LoginForm
