import { useState } from "react";
// React bootstrap components
import { Form, Button, Container,InputGroup,FormControl } from "react-bootstrap";
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
    <Container>
      <Form onSubmit={(e) => onSubmit(e)}>
        <Form.Label>Reservation name</Form.Label>
       <InputGroup>
       <Form.Control
          type="text" 
          placeholder="name "
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button type="submit"  onClick={() => dispatch(addReservations(value))}>
          Add
        </Button>
       </InputGroup>
      </Form>
      {reservations.map((reservation, index) => (
        <div key={index}>
          <Reservation name={reservation} id={index} />
        </div>
      ))}
    </Container>
  );
};

export default Reservations;
