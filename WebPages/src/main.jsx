import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Home from './components/Home/Home.Jsx'
import About from './components/About/About.jsx'
import GetInTouch from './components/GetInTouch/GetInTouch.jsx'
import ContectUs from './components/ContactUs/ContectUs.jsx'
import UserDetailsForm from './components/UserDetailsForm/UserDetailsForm.jsx'
import Github, { GithubInfoLoader } from './components/GitHub/Github.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About />}/>
      <Route path='getInTouch' element={<GetInTouch />}/>
      <Route path='contactUs' element={<ContectUs />}/>
      <Route path='github' element={<Github />}
        loader={GithubInfoLoader}
      />
      <Route path='User/:username' element={<UserDetailsForm />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
