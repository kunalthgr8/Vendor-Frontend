import { useState, useEffect } from "react";
import "./Medicine.css";
import CartCard from "../CartCard/CartCard";
import Product from "../../assets/Product.svg";
import axios from "axios";

const userId="1234"
const Products = () => {
  // const vendor_Id = localStorage.getItem("user_id");
  const [products, setProducts] = useState([""]);
  useEffect(() => {
    getAllProducts();
  }, []);

  async function getAllProducts(e) {
    console.log("userId", userId);
    const products = await axios.get("http://localhost:4000/get_products_by_vendor_Id", {
      params: { userId: "1234" },
    });
    // const data = response.data;
    console.log(products.data);
    setProducts(products.data);
  }
  console.log(products);
  // const prods = [
  //   {
  //     images: [],
  //     _id: "65b7c52d4de23857fda6f564",
  //     productId: "12140970",
  //     userId: "1234",
  //     product_name: "hii",
  //     brand: "vase",
  //     price: "2000",
  //     createdAt: "2024-01-29T15:33:01.709Z",
  //     updatedAt: "2024-01-29T15:33:01.709Z",
  //     __v: 0,
  //   },
  //   {
  //     images: [],
  //     _id: "65b7c54e4de23857fda6f566",
  //     productId: "12140980",
  //     userId: "1235",
  //     product_name: "Vaseline",
  //     brand: "vaseeee",
  //     price: "150",
  //     createdAt: "2024-01-29T15:33:34.029Z",
  //     updatedAt: "2024-01-29T15:33:34.029Z",
  //     __v: 0,
  //   },
  //   {
  //     images: [],
  //     _id: "65b7c55c4de23857fda6f568",
  //     productId: "12140990",
  //     userId: "12345",
  //     product_name: "Vaseline",
  //     brand: "vaseeee",
  //     price: "1500",
  //     createdAt: "2024-01-29T15:33:48.978Z",
  //     updatedAt: "2024-01-29T15:33:48.978Z",
  //     __v: 0,
  //   },
  //   {
  //     images: [],
  //     _id: "65b7c5664de23857fda6f56a",
  //     productId: "12140910",
  //     userId: "12",
  //     product_name: "Vaseline",
  //     brand: "vaseeee",
  //     price: "1500",
  //     createdAt: "2024-01-29T15:33:58.879Z",
  //     updatedAt: "2024-01-29T15:33:58.879Z",
  //     __v: 0,
  //   },
  //   {
  //     images: [],
  //     _id: "65b9d927b1c9961ef2d8a887",
  //     productId: "567",
  //     userId: "120",
  //     product_name: "lalit",
  //     brand: "BMW",
  //     price: "1200000",
  //     createdAt: "2024-01-31T05:22:47.178Z",
  //     updatedAt: "2024-01-31T05:22:47.178Z",
  //     __v: 0,
  //   },
  // ];
  return (
    <div className="product-page">
      <div className="heading-product">
        <h1>Showing all your uploaded Items</h1>
      </div>
      <div className="product-cards">
        {products.map((item, index) => (
          <CartCard
            key={index}
            index={index}
            productId={item.productId}
            userId={item.userId}
            img={Product}
            price={item.price}
            name={item.product_name}
            desc={item.discount}
            quant={10}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
