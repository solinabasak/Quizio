import React from "react";
import { Row,Col, Form, Button,Container} from "react-bootstrap";
import profile from '../../images/b.png';
import loginimg from '../../images/login.png';

import './Login.css';

const Login = () => {
  return (
    <>
      <Container className="mt-150">
        <Row>
          <Col lg={4} md={6} sm={12} className="text-center mt-5 p-3">

          <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>
           </div>



             {/* <img className="profile" src={loginIcon}/>*/}
             <div>
           <h1>Login Page</h1>
           </div>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              

              <Button  className="btn btn-primary w-100" type="submit">
                LOGIN
              </Button>

              <p className="link">
              <a href="#">Forgot password</a> || <a href="#">Register</a>
            </p>
            </Form>
          </Col>

          <Col lg={8} md={6} sm={12}>
              <img className="w-100" src={loginimg} />
              
              </Col>
        </Row>
      </Container>
    </>
  );
};
export default Login;
