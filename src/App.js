import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CvTemplate from "./components/views/CvTemplate";
import PageNotFound from "./components/views/404Page";
import CvGeneratorFormView from "./components/views/CvGeneratorFormView";
import { QueryClient, QueryClientProvider } from "react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CvTemplate />,
    errorElement: <PageNotFound />,
  },
  { path: "/generate-cv", element: <CvGeneratorFormView /> },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
