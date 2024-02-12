import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import {
  AddProduct,
  Contact,
  Register,
  Home,
  LoginSignup,
  Order,
  Products,
  Sidebar,
  Topbar,
  Update,
  User,
} from "./components/index";
import { useState, useEffect } from "react";

function App() {
  const [isLogined, setIsLogined] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex App">
      {isLogined ? (
        <>
          <div className={`${windowWidth >= 1300 ? "sideb" : "nosideb"}`}>
            <Sidebar />
          </div>
          <div className={`${windowWidth >= 1300 ? "content" : "nocontent"}`}>
            <Topbar username={`${isLogined ? "Kunal Singla" : "Sign In"}`} />
            <Routes>
              <Route path="addproduct" element={<AddProduct />} />
              <Route path="contact" element={<Contact />} />
              <Route path="/" element={<Home />} />
              <Route path="orderhistory" element={<Order />} />
              <Route path="productpage" element={<Products />} />
              <Route path="updateproduct" element={<Update />} />
              <Route path="user" element={<User />} />

              {/* Add a default route for unmatched paths */}
              <Route path="*" element={<Home />} />
            </Routes>
          </div>
        </>
      ) : (
        <Routes>
          <Route path="login" element={<LoginSignup />} />
          <Route path="/registershop" element={<Register />} />

          {/* Add a default route for unmatched paths */}
          <Route path="*" element={<LoginSignup />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
