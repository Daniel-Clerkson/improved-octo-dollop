import React from "react";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import Mainlayout from "./layout/Mainlayout";
import Errorpage from "./pages/Errorpage";
import Marketpage from "./pages/Marketpage";
import Extension from "./pages/Extension";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Community from "./pages/Community"
import FoodBank from "./pages/FoodBank";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Mainlayout />}>
        <Route index element={<Mainpage />} />
        <Route path="/market" element={<Marketpage />} />
        <Route path="extension" element={<Extension />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resources" element={<Blog />} />
        <Route path="/community" element={<Community />} />
        <Route path="/foodbank" element={<FoodBank />} />
        <Route path="*" element={<Errorpage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
