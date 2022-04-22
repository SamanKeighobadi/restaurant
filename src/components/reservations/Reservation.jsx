// Redux
import { useDispatch } from "react-redux";
import { addCustomer } from "../../redux/features/customerSlice";
import { deleteReservations } from "../../redux/features/reservationsSlice";
// React bootstrap
import {Card} from "react-bootstrap";
// uuid 
import { v4 as uuid } from "uuid";
// PropTypes
import PropTypes from 'prop-types';

const Reservation = ({ name, id }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Card className="mt-2 " style={{cursor:"pointer"}} >
        <Card.Body
          onClick={() => {
            dispatch(
              addCustomer({
                id: uuid(),
                name,
                food: [],
              })
            );
            dispatch(deleteReservations(id));
          }}
        >
          {" "}
          {name}{" "}
        </Card.Body>
      </Card>
    </div>
  );
};

Reservation.propTypes = {
  name:PropTypes.string,
  id:PropTypes.number
}

export default Reservation;
