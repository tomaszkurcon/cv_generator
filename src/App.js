import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CvTemplate from "./components/views/CvTemplate";
import PageNotFound from "./components/views/404Page";
import CvGeneratorForm from "./components/views/CvGeneratorFormView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CvTemplate />,
    errorElement: <PageNotFound />,
  },
  { path: "/generate-cv", element: <CvGeneratorForm /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
