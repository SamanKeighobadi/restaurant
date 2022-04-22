import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  FormControl,
  Form,
  Card,
  InputGroup,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { addFoodToCustomer } from "../../redux/features/customerSlice";

const Customer = ({ name, food, id }) => {
  const dispatch = useDispatch();

  const [customerFood, setCustomerFood] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setCustomerFood(" ");
  };

  return (
    <div>
      <Card className="pb-4">
        <Card.Body>
          <Row>
            <Col>
              {" "}
              <div>
                <h6>{name}</h6>
                <span>
                  {food.map((f) => (
                    <span>{f} </span>
                  ))}
                </span>
              </div>
            </Col>
            <Col>
              <Form onSubmit={(e) => onSubmit(e)}>
                <InputGroup>
                  <FormControl
                    className=""
                    size="sm"
                    type={"text"}
                    placeholder="food"
                    onChange={(e) => setCustomerFood(e.target.value)}
                    value={customerFood}
                  />
                  <Button
                    size="sm"
                    type="submit"
                    className=""
                    onClick={() =>
                      dispatch(
                        addFoodToCustomer({
                          id,
                          food: customerFood,
                        })
                      )
                    }
                  >
                    Add
                  </Button>
                </InputGroup>
              </Form>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Customer;
