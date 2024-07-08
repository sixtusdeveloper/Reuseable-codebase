import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../App.tsx'
// import UserRegistration from 'components/UserRegistration'
import '../index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    {/* <UserRegistration /> */}
  </React.StrictMode>,
)
