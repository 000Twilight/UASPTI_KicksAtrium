import React, { lazy, Suspense, useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Paralax from "./Paralax";
import Loading from "./Loading";
import Footer from "./Footer";
import Cart from "./Cart";
import CheckoutPage from "./CheckoutPage";

import { forumData } from "./Api";
import { fullShop } from "./FullShopApi";

const Home = lazy(() => import("./Home"));
const Product = lazy(() => import("./Product"));
const Aboutus = lazy(() => import("./Abotus"));
const FullShop = lazy(() => import("./FullShop"));

function Main() {
  const location = useLocation();
  const [shopReady, setShopReady] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const fetchedData = await forumData();
        // console.log(fetchedData);
        setShopReady(fetchedData.length > 0);
      } catch (error) {
        console.error(error);
      }
    };

    fetchApi();
  }, []);

  return (
    <div>
          {location.pathname === "/" && <Paralax />}
          <Navbar User={user} />
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={shopReady ? <Home /> : <Loading />} />
              <Route path="/About-Us" element={<Aboutus />} />
              <Route path="/Shop" element={<FullShop fullShop={fullShop} />} />
              <Route
                path="/Shop/Product/:id"
                element={<Product forumData={forumData} fullShop={fullShop} />}
              />
              <Route path="*" element={<Home />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route path="/cart/Checkout" element={<CheckoutPage />} />
              {/* <Route exact path="/cart" element={<Cart />} /> */}
            </Routes>
          </Suspense>
          <Footer />
    </div>
  );
}

export default Main;
