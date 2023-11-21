import React, { useEffect, useState } from "react";
import {useParams } from "react-router-dom";

export default function CustomerServiceDetail() {
  let [serviceData, setServiceData] = useState(null);
  const serviceTypes = ["monogram", "returns", "shop-gifts", "warranty"];
  const { serviceType } = useParams();
  const fetchServiceDetails = async () => {
    let response = await fetch(`/mock-api/${serviceType}.json`);
    setServiceData(await response.json());
  };

  useEffect(() => {
    if (serviceTypes.includes(serviceType)) {
      fetchServiceDetails();
    }
  }, [serviceType]);
  
  return (
    <>
      <div className={`customer-service-detail-section ${serviceType}`}>
        <div className="header-wrapper">
          <div className="container">
            <div className="row">
              <div className="twelve columns">
                <h1 className="main-heading">
                  {serviceType.replace("-", " ")}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="main-content">
          {serviceData?.map((service) => {
            return (
              <section key={service.id} className="content-section">
                <div className="container">
                  <div className="row">
                    <div className="twelve columns">
                      <h2 className="sub-heading">{service.heading}</h2>
                      <p className="">{service.content}</p>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
}
