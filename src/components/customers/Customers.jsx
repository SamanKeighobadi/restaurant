import { useSelector } from "react-redux";

import { Container } from "react-bootstrap";
import Customer from "./Customer";

const Customers = () => {
  const customers = useSelector((state) => state.customer.value);

  return (
    <div>
      <Container>
        <h2>Customers</h2>
        {customers.map((customer, index) => (
          <div key={index}>
            <Customer
              name={customer.name}
              id={customer.id}
              food={customer.food}
            />
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Customers;
