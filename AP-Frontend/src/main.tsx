import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
  Navigate
} from 'react-router-dom'
import FallbackPage from './pages/error/FallbackPage'
import PartsList from './pages/parts/PartsList'

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      {/* Application Routes */}
      <Route path="">
        {/* <Route path="/" element={<Dashboard />} /> */}
        <Route path="" element={<PartsList />} />

        <Route path="/parts">
          <Route path=":id" element={<PartsList />} />
        </Route>
    </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={routes} fallbackElement={<FallbackPage />} />
  </React.StrictMode>
)
