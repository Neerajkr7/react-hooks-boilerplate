import React, { useState } from 'react'
import { useHistory, withRouter } from 'react-router-dom'

const SignIn = () => {
  const [formElements, setFormElement] = useState({})
  const history = useHistory()
  const handleInputChange = ({ name, value }) => {
    setFormElement({ ...formElements, [name]: value })
  }
  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (formElements.username === 'neeraj' && formElements.password === 'goodvibes') {
      localStorage.setItem('authtoken', '2345678904567890vv5')
      history.push('/product/list')
    }
  }
  return (
    <div className="signin-wrapper col-md-4 offset-md-4 card">
      <form onSubmit={handleFormSubmit} className="card-body">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">username</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            name="username"
            onChange={({ target }) => handleInputChange(target)} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            onChange={({ target }) => handleInputChange(target)} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}


export default withRouter(SignIn)