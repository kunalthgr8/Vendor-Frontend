import React from "react";
import "./Home.css";
import { TotalDetail, InfoTickets,Table } from "../index";
import Product from "../../assets/product.png";
import User from "../../assets/user.svg";
import Rupee from "../../assets/Rupee.svg";

function Home() {
  return (
    <div className="home">
      <div className="upper-home">
        <TotalDetail heading="Total Earnings" image={Rupee} amount="Rs. 500" />
        <TotalDetail heading="Total Products" image={Product} amount="1000" />
        <TotalDetail heading="Total Customers" image={User} amount="200" />
      </div>
      <div className="lower-home">
        <div className="lower-left-home">
          <div className="heading-lower">
            <h1>Payment Statics</h1>
          </div>
          <div className="info-tickets">
            <InfoTickets
              heading="Total Transcations"
              image={Rupee}
              amount="Rs. 500"
            />
            <InfoTickets
              heading="Confirm Orders"
              image={Product}
              amount="1000"
            />
            <InfoTickets heading="Order Delivered" image={User} amount="800" />
          </div>
        </div>
        <div className="lower-right-home">
          <div className="heading-lower">
            <h1>Popular Menu</h1>
          </div>
          <div className="table-lower">
            <Table/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
