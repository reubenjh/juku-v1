import React from 'react'
import { render } from 'react-dom'
import {HashRouter as Router} from 'react-router-dom'

import './sass/main.scss'
import App from './components/App'

import store from './store' //redux
import { Provider } from 'react-redux' //redux


document.addEventListener('DOMContentLoaded', () => {
  render(
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>,
    document.getElementById('app')
  )
})
