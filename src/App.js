import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CvTemplate from "./components/views/CvTemplate";
import PageNotFound from "./components/views/404Page";

import { QueryClient, QueryClientProvider } from "react-query";
import { CvDataContextProvider } from "./context/CvDataContext";


const router = createBrowserRouter([
  {
    path: "/",
    element: <CvTemplate edit={false} />,
    errorElement: <PageNotFound />,
  },
  { path: "/generate-cv", element: <CvTemplate edit={true} /> },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <CvDataContextProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </CvDataContextProvider>
  );
}

export default App;
