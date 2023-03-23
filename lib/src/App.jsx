import "./App.css";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import { Home, Layout, RecipePage, Form } from './Pages'
import { testLoader } from './loaders'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} loader={testLoader} />
      <Route path="/form/:type" element={<Form />} />
      <Route path="/recipe/:id" element={<RecipePage />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
