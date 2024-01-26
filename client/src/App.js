import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import SingleBlog from "./pages/SingleBlog/SingleBlog";
import Banner from "./component/Banner/Banner";
import Search from "./component/Search";
import Login from "./component/Register/Login";
import Register from "./component/Register/Register";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      {/* <Banner /> */}
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs/:id",
        element: <SingleBlog />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
