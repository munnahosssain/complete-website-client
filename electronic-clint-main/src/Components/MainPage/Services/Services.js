import React, { useEffect, useState } from "react";
import ServiceDetail from "../ServiceDetail/ServiceDetail";
import "./Services.css";



const Services = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    fetch('https://secure-chamber-85441.herokuapp.com/services')
      .then(res => res.json())
      .then(data => setServices(data))
  }, []);

  return (
    <section className="service-container container text-center mt-5">
      <h2 className="text-danger">Details</h2>
      <p className="text-secondary">Lorem ipsum dolor sit amet.!</p>
      <div className="row">
        {
          services.map(service => <ServiceDetail key={service._id} service={service}></ServiceDetail>)
        }
      </div>
    </section>
  );
};

export default Services;
