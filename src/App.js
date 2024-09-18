import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./page/Home";
import ThankyouPage from "./page/ThankyouPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/thankyou",
    element: <ThankyouPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
