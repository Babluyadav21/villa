import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import NotFound from './components/NotFound/NotFound'
import Blogs from './components/Blogs/Blogs'
import Services from './components/Services/Services'
import Gallery from './components/Gallery/Gallery'
import Stay from './components/VillaPage/Stay'
import Events from './components/Events/Events'
import TravelTips from './components/TravelTips/TravelTips'
import Experiences from './components/Experiences/Experiences'

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  const newRutes = createBrowserRouter([{
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'blogs',
        element: <Blogs />,
      },
      {
        path: 'blogs/stay',
        element: <Stay />
      },
      {
        path: 'blogs/events',
        element: <Events />
      },
      {
        path: 'blogs/travelTips',
        element: <TravelTips />
      },
      {
        path: 'blogs/experiences',
        element: <Experiences />
      },
      {
        path: 'contact',
        element: <Contact />
      },

      {
        path: 'service',
        element: <Services />
      },
      {
        path: 'gallery',
        element: <Gallery />
      },

      {
        path: '*',
        element: <NotFound />
      }
    ]
  }])

  // const routes = createBrowserRouter(
  //   createRoutesFromElements(

  //     <Route path='/' element={<Layout />}>
  //       <Route path='' element={<Home />}></Route>
  //       <Route path='/about' element={<About />}></Route>
  //       <Route path='/contact' element={<Contact />}></Route>
  //       <Route path='/Stay' element={<Stay/>}></Route>
  //     </Route>
  //   )
  // )

  return (
    <RouterProvider router={newRutes} />
  )

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
}

export default App
