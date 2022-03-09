import { useState } from 'react';
import './Signup.css';
import {Button,Form,Row,Col,Container} from "react-bootstrap";
import reg1img from '../../images/reg1.jpg';

export default function Signup() {

// States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleName = (e) => {
	setName(e.target.value);
	setSubmitted(false);
};

// Handling the email change
const handleEmail = (e) => {
	setEmail(e.target.value);
	setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
	setPassword(e.target.value);
	setSubmitted(false);
};

// Handling the form submission
const handleSubmit = (e) => {
	e.preventDefault();
	if (name === '' || email === '' || password === '') {
	setError(true);
	} else {
	setSubmitted(true);
	setError(false);
	}
};

// Showing success message
const successMessage = () => {
	return (
	<div
		className="success"
		style={{
		display: submitted ? '' : 'none',
		}}>
		<h1>User {name} successfully registered!!</h1>
	</div>
	);
};

// Showing error message if error is true
const errorMessage = () => {
	return (
	<div
		className="error"
		style={{
		display: error ? '' : 'none',
		}}>
		<h1>Please enter all the fields</h1>
	</div>
	);
};

return (
	<Container className="mt-150">
	<div className="form">
		<Row>
	<div>
		<h1>User Registration</h1>
	</div>

	{/* Calling to the methods */}
	<div className="messages">
		{errorMessage()}
		{successMessage()}
	</div>

	<Col lg={8} md={6} sm={12}>
              <img className="w-100" src={reg1img} />
              
              </Col>


	<Col lg={4} md={6} sm={12} className="text-center mt-5 p-3">
	<form>
		{/* Labels and inputs for form data */}
		{/*<label className="label">Name</label>*/}
        {/*<input type="text" name="name" value={name} className="input" placeholder="Your Name" onChange={ handleName }></input>*/}

		<Form>

		<Form.Group className="mb-3" controlId="formBasicPassword">
                
                <Form.Control type="text" placeholder="Your Name" onChange={handleName} className="input"
		value={name} />
              </Form.Group>
              
              

			  <Form.Group className="mb-3" controlId="formBasicEmail">
                
                <Form.Control type="email" placeholder="Enter email" onChange={handleEmail} className="input"
		value={email} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                
                <Form.Control type="password" placeholder="Password" onChange={handlePassword} className="input"
		value={password} />
              </Form.Group>

			  


			  </Form>
		

		
	{/*}	<label className="label">Password</label>
		<input onChange={handlePassword} className="input"
value={password} type="password" />*/}

		<Button onClick={handleSubmit} className="btn btn-primary w-100"  type="submit">
		Create Account
		</Button>

		<p className="link">
              Already have an account?  <a href="#">Login</a>
            </p>
	</form>
	</Col>
	</Row>
	</div>
	</Container>

	
);
}
