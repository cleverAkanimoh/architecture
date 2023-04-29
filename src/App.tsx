import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom"


import routes from './routes'

const browserRouter = createBrowserRouter(routes)

export default () => <RouterProvider router={browserRouter} />