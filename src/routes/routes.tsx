import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Signup from "../pages/SignUp";
import AllBooks from "../pages/AllBooks";
import AddBook from "../pages/AddBook";
import BookDetails from "../pages/BookDetails";
import PrivateRoutes from "./privateRoutes";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/all-books",
        element: <AllBooks />,
      },
      {
        path: "/add-book",
        element: (
          <PrivateRoutes>
            <AddBook />
          </PrivateRoutes>
        ),
      },
      {
        path: "/singleBook/:id",
        element: (
          <PrivateRoutes>
            <BookDetails />
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default routes;
