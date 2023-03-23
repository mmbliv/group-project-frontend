import './App.css';

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import { Home, Layout } from './Pages'
import { testLoader } from './loaders.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} loader={testLoader}/>
    </Route>
  )
)

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
