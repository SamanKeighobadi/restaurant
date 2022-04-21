import { useDispatch, useSelector } from "react-redux";
import {useState} from 'react'
import { addFoodToCustomer } from "../../redux/features/customerSlice";

const Customers = () => {

    const [food, setFood] = useState();

    const customers = useSelector(state => state.customer.value);
    const dispatch = useDispatch();

  return (
    <div>
      <h2>customers</h2>
      <div>
        {customers.map((customer, index) => (
          <ul key={index}>
            <li>
              {" "}
              {customer.name}
              <span>
                {customer.food.map((f) => (
                  <span>{f}</span>
                ))}
              </span>
              <input
                type={"text"}
                placeholder="food"
                onChange={(e) => setFood(e.target.value)}
              />
              <button
                onClick={() =>
                  dispatch(
                    addFoodToCustomer({
                      id: customer.id,
                      food,
                    })
                  )
                }
              >
                add
              </button>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Customers;
