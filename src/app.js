import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import { injectGlobal, ThemeProvider } from 'styled-components'
import { hot } from 'react-hot-loader'

import { Router } from 'react-router'
import Routes from './router'
import stores, { history } from './store'

/* eslint-disable no-unused-expressions */
injectGlobal`
 *{
   margin:0;
   padding:0;
 }
`

const theme = {
  color: '#ffa12f',
}

class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <ThemeProvider theme={theme}>
          <Router history={history}>
            <Routes />
          </Router>
        </ThemeProvider>
      </Provider>
    )
  }
}

export default hot(module)(App)
