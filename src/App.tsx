import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import routes from './routes'

const browserRouter = createBrowserRouter(routes)

export default () => <RouterProvider router={browserRouter} />