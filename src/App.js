import React from "react";
import NavAndSidebar from "./components/navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import SliderTop from "./components/sliderTop";
import Home from "./pages/home";
import Footer from "./components/footer";
import Product from "./pages/products";
import ProductDetail from "./pages/productDetail";
import "./_app.scss";
import ShippingCart from "./pages/cart";
import Blog from "./pages/blog";
import Ordertracking from "./pages/ordertracking";
import Help from "./pages/help";
import ContactUs from "./pages/contactUs";
import AboutUs from "./pages/aboutUs";
import FitGuide from "./pages/fitGuide";
import Collaborations from "./pages/collaborations";
import Sustainability from "./pages/sustainability";
import Reviews from "./pages/reviews";
import TermsConditions from "./pages/termsConditions";
import PrivacyPolicy from "./pages/privacyPolicy";
import ReturnPolicy from "./pages/returnPolicy";
import Warrenty from "./pages/warranty";
import PaymentPolicy from "./pages/paymentPolicy";
import JewelryCare from "./pages/jewelryCare";
import ShippingInfo from "./pages/shippingInfo";
import Checkout from "./pages/checkout";
import Profile from "./pages/profile/index";
import MyOrders from "./pages/profile/MyOrders";
import EditProfile from "./pages/profile/EditProfile";

const App = () => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname !== "/checkout" &&
        (pathname !== "/" ? (
          <div
            style={{
              position: "fixed",
              width: "100%",
              // zIndex:
              //   (pathname === "/product-details" ||
              //     pathname === "/shipping-cart") &&
              //   "999",
              zIndex: pathname !== "/" && "999",
            }}
          >
            <SliderTop />
          </div>
        ) : (
          <SliderTop />
        ))}

      {pathname !== "/checkout" &&
        (pathname !== "/" ? (
          <div
            style={{
              position: "fixed",
              marginTop: "48px",
              width: "100%",
              background: "#fff",
              zIndex: 999,
            }}
          >
            <NavAndSidebar />
          </div>
        ) : (
          <NavAndSidebar />
        ))}
      <Routes>
        <Route index element={<Home />} />
        <Route path="products" element={<Product />} />
        <Route path="product-details" element={<ProductDetail />} />
        <Route path="shipping-cart" element={<ShippingCart />} />
        <Route path="blog" element={<Blog />} />
        <Route path="ordertracking" element={<Ordertracking />} />
        <Route path="help" element={<Help />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="fit-guide" element={<FitGuide />} />
        <Route path="collaborations" element={<Collaborations />} />
        <Route path="sustainability" element={<Sustainability />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="terms-conditions" element={<TermsConditions />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="return-policy" element={<ReturnPolicy />} />
        <Route path="warranty" element={<Warrenty />} />
        <Route path="payment-policy" element={<PaymentPolicy />} />
        <Route path="jewelryCare" element={<JewelryCare />} />
        <Route path="shipping-information" element={<ShippingInfo />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="profile" element={<Profile />} />
        <Route path="profile/edit" element={<EditProfile />} />
        <Route path="profile/my-orders" element={<MyOrders />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
