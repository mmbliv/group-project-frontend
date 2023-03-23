import "./App.css";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import { Home, Layout, RecipePage, Form } from './Pages'
import { recipeLoader } from './loaders'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} loader={recipeLoader} />
      <Route path="/form/:type" element={<Form />} />
      <Route path="/recipe/:id" element={<RecipePage />} loader={recipeLoader} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
