import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ProjectProvider } from './Context/ProjectProvider'

ReactDOM.render(
  <BrowserRouter>
    <ProjectProvider>
      <App />
    </ProjectProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
