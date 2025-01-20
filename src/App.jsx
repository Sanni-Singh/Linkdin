
import './App.css'
import LoginComponent from './components/LoginComponent'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainComponent from './components/MainComponent'
import { Provider, useDispatch } from 'react-redux';
import store from '../store';
import { useEffect } from 'react';
import { updateUserDetails } from './slices/userSlices';
function App() {
  // const dispatch = useDispatch();
    // useEffect(()=>{},[])
    
    // if(data){
    //   const userRes = JSON.parse(data);
    //   dispatch(updateUserDetails(userRes))
    // }
    // console.log(JSON.parse(data));
  

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
