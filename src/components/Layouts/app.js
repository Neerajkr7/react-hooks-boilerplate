import React from 'react'


const AppLayout = ({ children }) => {
  const checkNetwork = () => {
    if (window.navigator.onLine) {
      return children
    } else {
      return <h1 style={{ textAlign: 'center' }}>No Internet Connection</h1>
    }
  }
  return (checkNetwork())
}

export default AppLayout