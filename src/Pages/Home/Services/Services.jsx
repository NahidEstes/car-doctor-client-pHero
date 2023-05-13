import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="grid lg:grid-cols-3">
        {services.map((service) => (
          <div key={service._id}>
            <img
              src={service.img}
              className="w-60 h-40 border border-red-300"
              alt=""
            />
            <h3>{service.title}</h3>
            {/* <div className="flex justify-between"> */}
            <p>Price: ${service.price}</p>
            <Link to={`/book/${service._id}`}>Book Now</Link>
            {/* </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
