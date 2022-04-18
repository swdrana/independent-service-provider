import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Signup.css";
import google from "../../images/g-logo.png";
const Signup = () => {
  const [isChacked, setIsChacked] = useState(false);
//   console.log(isChacked);
  const handelForm = (e)=>{
      e.preventDefault();
      const email =e.target.email.value;
      const password =e.target.password.value;
      const conformPassword =e.target.conformPassword.value;
      console.log(email, password, conformPassword);
  }
  return (
    <div className="d-flex justify-content-center ">
      <div
        className="w-25 d-flex flex-column justify-content-center "
        style={{ height: "80vh" }}
      >
        <Form className="my-3 " onSubmit={handelForm}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" name="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" name="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="conformPassword">
            <Form.Control type="password" name="conformPassword" placeholder="Conform Password" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              id="disabledFieldsetCheck"
              label="Accept Terms & Condition"
              onClick={() => {
                setIsChacked(!isChacked);
              }}
            />
          </Form.Group>
          <input
            className="mx-auto w-50 d-block btn btn-primary"
            type="submit"
            value="Sign Up"
            disabled={!isChacked}
          />
        </Form>

        <div className="separator d-flex align-items-center">
          <div className="w-100 line mx-3"></div>
          <span className="orange">Or</span>
          <div className="w-100 line mx-3"></div>
        </div>

        <div className="pop-up-authorize my-3 d-flex justify-content-center">
          <Button>
            <img src={google} height={40} className="rounded-3 me-3" alt="" />
            <span>Sign up with Google</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
