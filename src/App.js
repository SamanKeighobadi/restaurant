import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addReservations, deleteReservations } from "./redux/features/reservationsSlice";

const App = () => {
  const reservations = useSelector((state) => state.reservations.value);

  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  return (
    <div className="App">
      <h1>restaurant redux toolkit</h1>
      <div>
        <input
          type="text"
          placeholder="saman..."
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() => dispatch(addReservations(value))}>add</button>
      </div>
      {reservations.map((res, index) => (
        <ul key={index}>
          <li> {res} <span onClick={() => dispatch(deleteReservations(index))}>&times;</span> </li> 
        </ul>
      ))}
    </div>
  );
};

export default App;
