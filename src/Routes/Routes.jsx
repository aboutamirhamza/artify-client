import { Suspense } from "react";
import { createBrowserRouter } from "react-router";
import Loading from "../components/Loading/Loading";
import ArtWorkViewDetails from "../components/pages/ArtWorkViewDetails";
import ExploreArtWork from "../components/pages/ExploreArtWork";
import Home from "../components/pages/Home";
import HomeLayout from "../layout/HomeLayout";
import AddArtWork from "../components/pages/AddArtWork";

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
    ],
  },
]);

export default router;
