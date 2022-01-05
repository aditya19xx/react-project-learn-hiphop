import React from 'react';
import { Card, Col } from 'react-bootstrap';
import '../Service/Service.css';

const Service = (props) => {
    const {name, description, fee, img} = props.service; 
    return (
        
          
            <div className="g-4 ">
              <Card className="p-4 single-cart shadow p-3 mb-5 bg-white rounded">
              <Card.Img variant="top" className="service-cart-img" src={img} fluid />
              <br/>
              <Card.Body>
                <Card.Title className="card-title fs-1">{name}</Card.Title>
                <br/>
                <Card.Text>
                  {description}
                  
                  <h5 className="pt-5">Fee: ${fee}</h5>
                  <br/>
                  
                </Card.Text>
              </Card.Body>
              <button className="buy-this-course">Buy this course</button>
            </Card>
            </div>
          
        
    );
};

export default Service;