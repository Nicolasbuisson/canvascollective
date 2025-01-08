import { Button } from "../button/button";
import "./services.css";

interface IService {
  name: string;
  price: string;
}

export const Services = () => {
  const services: IService[] = [
    {
      name: "haircut",
      price: "40",
    },
    {
      name: "haircut & beard trim",
      price: "45-50",
    },
    {
      name: "beard trim",
      price: "25",
    },
    {
      name: "student haircut",
      price: "35",
    },
    {
      name: "student haircut & beard trim",
      price: "40-45",
    },
    {
      name: "student scissor cut",
      price: "40",
    },
    {
      name: "full scissor cut",
      price: "45",
    },
    {
      name: "family",
      price: "30",
    },
  ];
  return (
    <section className="services-section">
      <h1>Services</h1>
      <div className="services-list">
        {services.map((service) => {
          return (
            <a
              key={service.name}
              target="blank"
              href="https://getsquire.com/booking/book/canvas-collective-montreal/barber/any/services"
              className="service-entry"
            >
              <p>{service.name}</p>
              <p>{service.price}</p>
            </a>
          );
        })}
      </div>
      <Button
        text="Book Now"
        url="https://getsquire.com/booking/book/canvas-collective-montreal/barber/any/services"
        variant="outlined"
      />
    </section>
  );
};
