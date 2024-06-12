import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";


const Header = lazy(() => import('../components/headerComponent/header.tsx'))
const MainPage = lazy(() => import('../pages/mainpage/mainPage.tsx'))


export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      {path: '/', element: <MainPage />}

    ]
  }
])