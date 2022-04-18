import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css'
import google from "../../images/g-logo.png";
const Login = () => {
    return (
        <div>
            
    <div className="d-flex justify-content-center ">
      <div
        className="w-25 d-flex flex-column justify-content-center "
        style={{ height: "80vh" }}
      >
        <Form className="my-3 ">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          {/* <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            id="disabledFieldsetCheck"
            label="Already account?"
          />
        </Form.Group> */}
          <Button className="py-2 mt-4 w-50 mx-auto d-block" type="submit">
            Sign In
          </Button>
        </Form>

        <div className="separator d-flex align-items-center">
          <div className="w-100 line mx-3"></div>
          <span className="orange">Or</span>
          <div className="w-100 line mx-3"></div>
        </div>

        <div className="pop-up-authorize my-3 d-flex justify-content-center">
          <Button>
            <img src={google} height={40} className="rounded-3 me-3" alt="" />
            <span>Sign in with Google</span>
          </Button>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Login;