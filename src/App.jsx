import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Movies from './Components/Movies/Movies';
import Tvshow from './Components/Tvshow/Tvshow';
import People from './Components/People/People';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Notfound from './Components/NotFound/Notfound';



let routers = createBrowserRouter([
  { path: "", element: <Layout /> , children: [
    {index:true , element: <Home/>},
    {path:"movies" , element: <Movies/>},
    {path:"tvshow" , element: <Tvshow/>},
    {path:"people" , element: <People/>},
    {path:"login" , element: <Login/>},
    {path:"register" , element: <Register/>},
    {path:"*" , element: <Notfound/>},
  ]}
])

function App() {
  return <RouterProvider router={routers}></RouterProvider>
}

export default App;
