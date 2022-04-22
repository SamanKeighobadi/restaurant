import { useSelector } from "react-redux";

import { Alert, Container } from "react-bootstrap";
import Customer from "./Customer";

const Customers = () => {
  const customers = useSelector((state) => state.customer.value);

  return (
    <div>
      <Container className="mt-4">
        <h2>Customers</h2>
        {customers.length > 0 ? customers.map((customer, index) => (
          <div key={index}>
            <Customer
              name={customer.name}
              id={customer.id}
              food={customer.food}
            />
          </div>
        )):(
          <Alert variant="warning" className="mt-5 w-50 mx-auto">
            <Alert.Heading>
            There is no customer yet
            </Alert.Heading>
            <hr/>
            <p>
            Please go to the reservation page and book a table for yourself !
            </p>
          </Alert>
        )}
      </Container>
    </div>
  );
};

export default Customers;
