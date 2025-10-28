import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider,createBrowserRouter , Route} from 'react-router-dom'
import Home from "../src/components/Home.jsx"
import About from "../src/components/About.jsx"
import Contact from "../src/components/Contact.jsx"
import User from "../src/components/User.jsx"
import Github from "../src/components/Github.jsx"

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
        path:"",
        element:<Home />
      },
      {
        path:"/about",
        element:<About />
      },
      {
        path:"/contact",
        element:<Contact />
      },
      {
        path:"/user/:userid",
        element:<User />
      },
      {
        path:"/github",
        element:<Github />
      }

    ]
  }
]);

// ---------------------------------------
// const router1 = createBrowserRouter([
//   createroutesFromElements(
//     <Route path="/" element={<App />}>
//      <Route path='' elememt={<Home />}/>
//     </Route>
//   )
// ]);


// ------------------------------------

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    
  </StrictMode>,
)
