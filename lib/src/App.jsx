import "./App.css";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Home, Layout, RecipePage, Form, Groceries, SearchPage } from "./Pages";
import { recipeLoader, groceriesLoader } from "./loaders";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} loader={recipeLoader} />
      <Route path="/form" element={<Form />} />
      {/* <Route
        path="/groceries"
        element={<Groceries />}
        loader={groceriesLoader}
      /> */}
      <Route
        path="/groceries"
        element={<Groceries />}
        loader={groceriesLoader}
      />
      <Route
        path="/recipe/:id"
        element={<RecipePage />}
        loader={recipeLoader}
      />
      <Route
        path="/search"
        element={<SearchPage />}
      />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
