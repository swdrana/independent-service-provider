import React from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.css";
import google from "../../images/g-logo.png";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";
const Login = () => {

  const navigate = useNavigate();
  
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const handelLoginForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password, error);
    signInWithEmailAndPassword(email, password);
    console.log(email, password, error);
  };
  if (user) {
    navigate("/home");
  }

  return (
    <div>
      <div className="d-flex justify-content-center ">
        <div
          className="w-25 d-flex flex-column justify-content-center "
          style={{ height: "80vh" }}
        >
          <Form className="my-3 " onSubmit={handelLoginForm}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                required
              />
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
          <p>{error}</p>
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
