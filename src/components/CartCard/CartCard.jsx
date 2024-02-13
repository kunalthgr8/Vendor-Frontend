import { useEffect, useState } from "react";
import "./CartCard.css";
import { NavLink } from "react-router-dom";
const CartCard = ({
  userId,
  index,
  img,
  price,
  name,
  desc,
  quant,
  productId,
}) => {
  const [added, seadded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const cartId = "7848374";

  const send_product_info = async () => {};
  return (
    <>
      {quantity > 0 && (
        <div className="Cart-Card">
          <div className="Image-Card">
            <img src={img} alt="Product" />
          </div>
          <div className="content-Card">
            <div className="top-ka-Card">
              <h1>{name}</h1>
            </div>
            <div className="Para-Card">
              <p className="by-Card">{desc}</p>
              <p className="quant-Card">{quant}</p>
            </div>
            <div className="bottom-Card">
              <h1>Rs. {price * quantity}</h1>
              <NavLink
                to="/addproduct"
                state={{
                  userId,
                  productId,
                }}
              >
                <div className="add-cart">
                  <div>Edit</div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartCard;
