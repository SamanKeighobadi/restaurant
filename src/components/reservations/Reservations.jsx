import { useState } from "react";
// React bootstrap components
import { Form, Button, Container, InputGroup, Alert } from "react-bootstrap";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { addReservations } from "../../redux/features/reservationsSlice";
//
import Reservation from "./Reservation";

const Reservations = () => {
  const [value, setValue] = useState("");

  const reservations = useSelector((state) => state.reservations.value);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    setValue("");
  };

  return (
    <Container className="mt-4">
      <Form onSubmit={(e) => onSubmit(e)}>
        <Form.Label>Reservation name</Form.Label>
        <InputGroup>
          <Form.Control
            required
            autoFocus
            type="text"
            placeholder="name "
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button
            type="submit"
            onClick={() => dispatch(addReservations(value))}
          >
            Add
          </Button>
        </InputGroup>
      </Form>
      {reservations.length>0 ? reservations.map((reservation, index) => (
        <div key={index}>
          <Reservation name={reservation} id={index} />
        </div>
      )):(
        <Alert variant="warning" className="mt-5 ">
            <Alert.Heading>
            No reservation made at this time
            </Alert.Heading>
            <hr/>
            <p>
            Please enter your name in the field above to reserve !
            </p>
          </Alert>
      )}
    </Container>
  );
};

export default Reservations;
