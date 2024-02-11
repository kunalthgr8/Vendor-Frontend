import React, { useState, useEffect } from "react";
import "./AddProduct.css";
import { NavLink } from "react-router-dom";

function AddProduct() {
  const [File, setFile] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [manufacturingDate, setManufacturingDate] = useState(new Date());
  const [expiryDate, setExpiryDate] = useState(new Date());
  const [type, setType] = useState("");
  const [countryOfOrigin, setCountryOfOrigin] = useState("");
  const [basePrice, setBasePrice] = useState();
  const [discount, setDiscount] = useState();
  const [itemDimension, setItemDimension] = useState("");
  const [itemWeight, setItemWeight] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    if (manufacturingDate > expiryDate) {
      setExpiryDate(manufacturingDate);
    }
  }, [manufacturingDate, expiryDate]);
  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  function Proceed() {
    console.log(
      File,
      productName,
      productDescription,
      brand,
      manufacturingDate,
      expiryDate,
      type,
      countryOfOrigin,
      basePrice,
      discount,
      itemDimension,
      itemWeight,
      quantity
    );
  }
  return (
    <div className=" flex flex-col">
      <div className=" w-full mt-5">
        <p className="add">Add a new product</p>
      </div>
      <div className="flex mt-10 gap-10">
        <div className="flex flex-col w-4/7">
          <div className="box1">
            <div className="geninfo">General Information</div>
            <div className="area">
              <div className="name">
                <label className="mt-5 text-xl">Product Name</label>
                <input
                  className="namefield"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </div>
              <div className="description">
                <label className="mt-5 text-xl">Product Description</label>
                <textarea
                  rows={4}
                  className="namefield"
                  value={productDescription}
                  onChange={(e) => setProductDescription(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="box1">
            <div className="geninfo">Product Information</div>

            <div className="area">
              <div className="name">
                <label className="mt-5 text-xl">Brand</label>
                <input
                  className="namefield"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                />
              </div>
              <div className="description">
                <div className="flex flex-row">
                  <div className="flex flex-col m-2">
                    <label className="mt-5 text-xl">Manufacturing Date</label>
                    <div className="container">
                      {" "}
                      <input
                        type="date"
                        className="namefield"
                        value={manufacturingDate}
                        onChange={(e) => setManufacturingDate(e.target.value)}
                      />{" "}
                    </div>
                  </div>
                  <div className="flex flex-col m-2">
                    <label className="mt-5 text-xl">Expiry Date</label>
                    <div className="container">
                      {" "}
                      <input
                        className="namefield"
                        type="date"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                      />{" "}
                    </div>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="flex flex-col m-2">
                    <label className="mt-5 text-xl">Type</label>
                    <div className="container">
                      {" "}
                      <input
                        className="namefield"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                      />{" "}
                    </div>
                  </div>
                  <div className="flex flex-col m-2">
                    <label className="mt-5 text-xl">Country of Origin</label>
                    <div className="container">
                      {" "}
                      <input
                        className="namefield"
                        value={countryOfOrigin}
                        onChange={(e) => setCountryOfOrigin(e.target.value)}
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-3/7">
          <div className="box1">
            <div className="geninfo">Pricing Information</div>
            <div className="area">
              <div className="name">
                <label className="mt-5 text-xl">Base Price</label>
                <input
                  className="namefield"
                  value={basePrice}
                  onChange={(e) => setBasePrice(e.target.value)}
                />
              </div>
              <div className="description">
                <label className="mt-5 text-xl">Discount</label>
                <input
                  rows={4}
                  className="namefield"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="box1">
            <div className="geninfo">Physical Information</div>

            <div className="area">
              <div className="description">
                <label className="mt-5 text-xl">Item Dimention</label>
                <div className="container">
                  {" "}
                  <input
                    className="namefield w-full"
                    value={itemDimension}
                    onChange={(e) => setItemDimension(e.target.value)}
                  />{" "}
                </div>
                <label className="mt-5 text-xl">Item Weight</label>
                <div className="container">
                  {" "}
                  <input
                    className="namefield w-full"
                    value={itemWeight}
                    onChange={(e) => setItemWeight(e.target.value)}
                  />{" "}
                </div>

                <label className="mt-5 text-xl">Quantity</label>
                <div className="container">
                  {" "}
                  <input
                    className="namefield w-full"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />{" "}
                </div>
                <label className="mt-5 text-xl">Image</label>
                <div className="container">
                  {" "}
                  <input
                    type="file"
                    onChange={handleChange}
                    className="namefield w-full flex justify-between"
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
      <div className="button-below">
        <NavLink to="/payment">
          <button className="but" onClick={Proceed}>
            Proceed
          </button>
        </NavLink>
        <button className="but">Back</button>
      </div>
    </div>
  );
}

export default AddProduct;
