import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/art-gallery" element={<MainLayout />}></Route>
    )
  );

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}
