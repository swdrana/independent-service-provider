import React from "react";
import { Button } from "react-bootstrap";
import "./Checkout.css";
const Checkout = () => {
  const order = () => {
      alert('Successful! i will try to contact you soon. Thanyou!');
    // return <h1>  </h1>;
  };

  const selectedItem = JSON.parse(localStorage.getItem("selectedItem")); // default value null
  if (selectedItem) {
    return (
      <>
        <div className="d-flex justify-content-center align-items-center container border rounded-3 my-4 p-2 checkout">
          <img src={selectedItem.img} className="w-25 rounded-3" alt="" />
          <div className="w-75 mx-5">
            <h3>Selected Item: {selectedItem.name}</h3>
            <p>Rating : {selectedItem.ratings}</p>
            <p>Description : {selectedItem.text}</p>
            <p>Price : {selectedItem.ratings}</p>
          </div>
        </div>
        <div className="container text-center border rounded-3 my-4 p-2">
          <h3 className="ms-5 ps-5">Your Address</h3>

          <div className="w-50 mx-auto">
            <label htmlFor="name" className=" w-25">Name: </label>
            <input className="w-75" type="text" name="name" id="" />
            <br />
            <br />
            <label htmlFor="mail" className="w-25">Email: </label>
            <input className="w-75" type="email" name="mail" id="" />
            <br />
            <br />
            <label className="w-25">Address: </label>
            <textarea className="w-75" name="address" id="" cols="20" rows="6"></textarea>
            <br />
            <Button onClick={order}>Submit</Button>
          </div>
        </div>
      </>
    );
  }
  return;
};

export default Checkout;
