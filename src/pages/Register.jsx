import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';

function RegisterPage() {
    const [validated, setValidated] = useState(false);
    const [registerForm,setRegisterForm]=useState({
        username:'',fullname:'',password:'',confirmPassword:'',
        contactNo:''
    })
    const handleInput=(e)=>{
        setRegisterForm({...registerForm,[e.target.id]:e.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if(!registerForm.username.trim() || !registerForm.fullname.trim() ||
        !registerForm.password.trim() || !registerForm.confirmPassword.trim()
        || !registerForm.contactNo.trim()){
           return setValidated(true)
        };
        console.log('Register form' , registerForm);
      };
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}
     className='px-md-0 w-75  mt-5 mx-auto'>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label className='text-warning fw-bolder'>Username</Form.Label>
        <Form.Control  
        id='username'
         value={registerForm.username} 
         onChange={handleInput} required
          type="text" placeholder="Username..." />
        <Form.Control.Feedback type="invalid">
            Please provide a valid username.
          </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicFullname">
        <Form.Label className='text-warning fw-bolder'>FullName</Form.Label>
        <Form.Control  
        id='fullname'
         value={registerForm.fullname} 
         onChange={handleInput} required
          type="text" placeholder="Full Name..." />
        <Form.Control.Feedback type="invalid">
            Please provide a valid Full Name.
          </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label className='text-warning fw-bolder'>Password</Form.Label>
        <Form.Control 
        id='password'
        value={registerForm.password} 
        onChange={handleInput} required
        type="password" placeholder="Password..." />
        <Form.Control.Feedback type="invalid">
            Please provide a valid password.
          </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
      <Form.Label className='text-warning fw-bolder'>Confirm Password</Form.Label>
        <Form.Control 
        id='confirmPassword'
        value={registerForm.confirmPassword} 
        onChange={handleInput} required
        type="password" placeholder="Confirm Password..." />
        <Form.Control.Feedback type="invalid">
            Please provide a valid Confirm Password.
          </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicContactNo">
        <Form.Label className='text-warning fw-bolder'>Contact No</Form.Label>
        <Form.Control  
        id='contactNo'
         value={registerForm.contactNo} 
         onChange={handleInput} required
          type="text" placeholder="Contact No..." />
        <Form.Control.Feedback type="invalid">
            Please provide a valid Contact No.
          </Form.Control.Feedback>
      </Form.Group>
      <NavLink style={{color:'goldenrod'}} to={'/login'}>
        Already Have an Account? Login Now!
      </NavLink>
      <div className="text-center">
      <Button variant="warning" className='w-50 mt-4  ' type="submit">
        Register
      </Button>
      </div>
    </Form>
  );
}

export default RegisterPage;