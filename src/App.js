import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addReservations, deleteReservations } from "./redux/features/reservationsSlice";
import { addCustomer } from "./redux/features/customerSlice";

const App = () => {
  const reservations = useSelector((state) => state.reservations.value);
  const customers = useSelector(state => state.customer.value)
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
          <li onClick={() =>dispatch(addCustomer({
            id:Math.floor(Math.random()*100),
            name:res,
            food:[]
          }))}> {res} <span onClick={() => dispatch(deleteReservations(index))}>&times;</span> </li> 
        </ul>
      ))}
      
      <h2>customers</h2>
      <div>
        {customers.map((customer,index) => (
          <ul key={index}>
            <li> {customer.name} 
            <span>
              {customer.food.map(f => (
                <span>{f}</span>
              ))}
            </span>
                <input type={'text'} placeholder='food' />
                <button>add</button>
             </li>
          </ul>
        ))}
      </div>

    </div>
    
  );
};

export default App;
