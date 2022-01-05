import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const HomeCard = () => {
    const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('./servicess.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  return (
    
    <div className="our-services-container">
      <h2 className="our-services-heading"> Our Services </h2>
      <div className="w-75 mx-auto">
      <Row  xs={1} md={2} className="g-4 ">
      {
        services.slice(0,4).map(service => <Service service={service}></Service>)
      }

    </Row>
      </div>
    </div>

  );
};

export default HomeCard;