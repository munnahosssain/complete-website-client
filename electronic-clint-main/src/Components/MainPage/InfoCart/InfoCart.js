import React from "react";
import './InfoCart.css'

const InfoCart = ({ info }) => {
  return (
    <div className="col-md-3 text-white info-cart text-center">
      <div className={`info-${info.background} info-container shadow`}>
        <img style={{ width: "60px" }} src={info.icon} alt="" />
        <h5 className="text-white">{info.title}</h5>
        <small className="text-white">{info.description}</small>
      </div>
    </div>
  );
};

export default InfoCart;
