import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AddPhotoPage from "./pages/AddPhotoPage";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/art-gallery" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/art-gallery/add" element={<AddPhotoPage />} />
      </Route>
    )
  );

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}
