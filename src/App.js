import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addReservations, deleteReservations } from "./redux/features/reservationsSlice";
import { addCustomer, addFoodToCustomer } from "./redux/features/customerSlice";

const App = () => {
  const reservations = useSelector((state) => state.reservations.value);
  const customers = useSelector(state => state.customer.value)
  const dispatch = useDispatch();

  const [value, setValue] = useState("");
  const [food, setFood] = useState('');

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
          <li onClick={() =>{
            dispatch(addCustomer({
            id:Math.floor(Math.random()*100),
            name:res,
            food:[]
          }))
          dispatch(deleteReservations(index))
          }
          }> {res} </li> 
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
                <input type={'text'} placeholder='food' onChange={e => setFood(e.target.value)} />
                <button onClick={() => dispatch(addFoodToCustomer({
                  id:customer.id,
                  food
                }))}>add</button>
             </li>
          </ul>
        ))}
      </div>

    </div>
    
  );
};

export default App;
