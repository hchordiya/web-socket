import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserManager from "./components/userManager";
import Home from "./components/home";
import Todo from "./components/todo";
import AppBar from "./components/common/appBar";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppBar />,
      children: [
        {
          path: "todo",
          element: <Todo />,
        },
      ],
    },
    // {
    //   path: "/",
    //   element: <Navigate to="/todo" />,
    // },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "user",
      element: <UserManager />,
    },
    {
      path: "todo",
      element: <Todo />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
