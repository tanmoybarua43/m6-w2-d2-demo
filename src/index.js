import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './store'
import { fetchTodos } from './features/todos/todosSlice'

import './api/server'

store.dispatch(fetchTodos())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
