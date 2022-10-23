import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import BlogDetail from "./routes/BlogDetail";
import BookDetail from "./routes/BookDetail";
import Dvd from "./routes/Dvd";
import Ebook from "./routes/Ebook";
import Home from "./routes/Home";
import InBound from "./routes/InBound";
import Music from "./routes/Music";
import NotFound from "./routes/NotFound";
import OutBound from "./routes/OutBound";
import Search from "./routes/Search";
import Used from "./routes/Used";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/book/:id",
        element: <BookDetail />,
      },
      {
        path: "/inbound",
        element: <InBound />,
      },
      {
        path: "/outbound",
        element: <OutBound />,
      },
      {
        path: "/music",
        element: <Music />,
      },
      {
        path: "/dvd",
        element: <Dvd />,
      },
      {
        path: "/used",
        element: <Used />,
      },
      {
        path: "/ebook",
        element: <Ebook />,
      },
      {
        path: "/search/:term",
        element: <Search />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetail />,
      },
    ],
  },
]);

export default router;
