/* eslint-disable */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './src/app'

const render = Component => {
  ReactDOM.render(
    <BrowserRouter basename="/insurance/">
      <Component />
    </BrowserRouter>,
    document.getElementById('app'),
  )
}

render(App)
