import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Error from "./pages/Error";
import Home from "./pages/homepage/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
