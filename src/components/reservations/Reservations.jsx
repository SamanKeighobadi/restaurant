// React bootstrap components
import { Form, Button, Container } from "react-bootstrap";
// Redux 
import { useSelector, useDispatch } from "react-redux";
import { addCustomer } from "../../redux/features/customerSlice";
import { deleteReservations } from "../../redux/features/reservationsSlice";

const Reservations = () => {
  const reservations = useSelector((state) => state.reservations.value);
  const dispatch = useDispatch();

  return (
    <Container>
      <Form>
        <Form.Label>Reservation name</Form.Label>
        <Form.Control type="text" />
        <Button>Add</Button>
      </Form>
      {reservations.map((res, index) => (
        <ul key={index}>
          <li
            onClick={() => {
              dispatch(
                addCustomer({
                  id: Math.floor(Math.random() * 100),
                  name: res,
                  food: [],
                })
              );
              dispatch(deleteReservations(index));
            }}
          >
            {" "}
            {res}{" "}
          </li>
        </ul>
      ))}
    </Container>
  );
};

export default Reservations;
