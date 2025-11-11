import { Suspense } from "react";
import { createBrowserRouter } from "react-router";
import Loading from "../components/Loading/Loading";
import ArtWorkViewDetails from "../components/pages/ArtWorkViewDetails";
import ExploreArtWork from "../components/pages/ExploreArtWork";
import Home from "../components/pages/Home";
import HomeLayout from "../layout/HomeLayout";
import AddArtWork from "../components/pages/AddArtWork";
import MyGallery from "../components/pages/MyGallery";
import MyFavorites from "../components/pages/MyFavorites";
import AuthLayout from "../layout/AuthLayout";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import Error404 from "../components/pages/Error404";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "explore-art-work",
        element: <Suspense fallback={<Loading></Loading>}><ExploreArtWork></ExploreArtWork></Suspense>,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: 'art-work-view-details',
        element: <Suspense fallback={<Loading></Loading>}><ArtWorkViewDetails></ArtWorkViewDetails></Suspense>,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: 'add-artwork',
        element: <Suspense fallback={<Loading></Loading>}><AddArtWork></AddArtWork></Suspense>,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: 'my-gallery',
        element: <Suspense fallback={<Loading></Loading>}><MyGallery></MyGallery></Suspense>,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: 'my-favorites',
        element: <Suspense fallback={<Loading></Loading>}><MyFavorites></MyFavorites></Suspense>,
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },
  {
    path: '/auth',
    Component: AuthLayout,
    children:[
      {
        path: '/auth/login',
        element: <Suspense fallback={<Loading></Loading>}><Login></Login></Suspense>,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: '/auth/register',
        element: <Suspense fallback={<Loading></Loading>}><Register></Register></Suspense>,
        hydrateFallbackElement: <Loading></Loading>,
      },
    ]
  },
  {
      path: '/*',
      Component: Error404,
  },
  
]);

export default router;
