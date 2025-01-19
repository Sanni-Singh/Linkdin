
import './App.css'
import LoginComponent from './components/LoginComponent'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainComponent from './components/MainComponent'
import { Provider } from 'react-redux';
import store from '../store';
function App() {
  

  const router = createBrowserRouter([
    {
      path:"/",
      element:<LoginComponent/>
    },
    {
      path:"/home",
      element:<MainComponent/>
    }
  ])
  return (
    < >
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </>
  )
}

export default App
