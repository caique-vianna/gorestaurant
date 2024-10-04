
import GlobalStyle from './styles/global'
import { RouterProvider } from 'react-router-dom'
import { router } from "./routes"


import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <GlobalStyle />
     <RouterProvider router={router} />
     <ToastContainer />
    </>
  )
}

export default App
