import { useDispatch } from "react-redux";
import { addCustomer } from "../../redux/features/customerSlice";
import { deleteReservations } from "../../redux/features/reservationsSlice";

const Reservation = ({ name, id }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <ul >
        <li
          onClick={() => {
            dispatch(
              addCustomer({
                id: Math.floor(Math.random() * 100),
                name,
                food: [],
              })
            );
            dispatch(deleteReservations(id));
          }}
        >
          {" "}
          {name}{" "}
        </li>
      </ul>
    </div>
  );
};

export default Reservation;
