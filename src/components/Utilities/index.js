import React from 'react'
import { useHistory } from 'react-router-dom'

export const AuthWrapper = ({ children }) => {
  const history = useHistory()
  const checkAuth = () => {
    if (localStorage.getItem('authtoken')) {
      return children
    } else {
      history.push('/signin')
    }
  }
  return (
    <>
      {checkAuth()}
    </>
  )
}

