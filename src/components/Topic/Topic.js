import React from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Checkout from "../../Pages/Checkout/Checkout";
import "./Topic.css";
const Topic = ({ item }) => {
  const { img, id, name, prices, text } = item;
  const navigate = useNavigate();

  const routeChange = () =>{ 
    localStorage.setItem('selectedItem', JSON.stringify(item));
    navigate('/checkout');
  }
  return (
    <div className="item col-sm-6 col-md-4">
      <div className="single-item p-3 m-1 d-flex flex-column">
        <img src={img} alt="" height={200} className="rounded-3"/>
        <div className="mt-2">
          <h3 className="text-start m-0 p-0">{name}</h3>
          <p className="text-start m-0 mt-1 p-0">
            Price: {prices}{" "}
          </p>
        </div>
        <hr />
        <p className="text-start" title={text}>
          {text > text.slice(0, 80) ? text.slice(0, 80) + " . . ." : text}
        </p>
        
        <Button variant="danger" onClick={(event)=>{routeChange()}} className="btn-checkout w-25 mx-auto">Select</Button>
        {/* <Link to={'/home'}>hmm</Link> */}
      </div>
    </div>
  );
};

export default Topic;
