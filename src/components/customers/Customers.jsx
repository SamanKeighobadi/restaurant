import { useDispatch, useSelector } from "react-redux";
import {useState} from 'react'
import { addFoodToCustomer } from "../../redux/features/customerSlice";
import {Container} from 'react-bootstrap'

const Customers = () => {

    const [food, setFood] = useState();

    const customers = useSelector(state => state.customer.value);
    const dispatch = useDispatch();

  return (
    <div>
      <Container>
      <h2>customers</h2>
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
      </Container>
    </div>
  );
};

export default Customers;
