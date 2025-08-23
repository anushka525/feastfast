import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './context/UserContext.jsx'
import { Provider } from 'react-redux';
import { store } from './redux/store.js'; 
import UserContextProvider from './context/UserContext.jsx'; 

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <UserContextProvider>
      <App />
    </UserContextProvider>
  </Provider>
)
