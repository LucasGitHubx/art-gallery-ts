import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AddPhotoPage from "./pages/AddPhotoPage";
import GalleryPage from "./pages/GalleryPage";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/art-gallery-ts/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/art-gallery-ts/add" element={<AddPhotoPage />} />
        <Route path="/art-gallery-ts/gallery" element={<GalleryPage />} />
      </Route>
    )
  );

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}
