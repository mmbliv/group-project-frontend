import "./App.css";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import { Home, Layout, Form } from './Pages'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} loader={testLoader}/>
      <Route path="/form/:type" element={<Form />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
