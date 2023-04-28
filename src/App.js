import './App.css';
import { Button , Form, FormGroup,Label, Input } from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';

function App() {
  return (
    <Form className="Login-form">
      <h2> Form checkpoint </h2>  
      <h3 className='text-center'> Welcome </h3>
      <FormGroup>
        <Label> Email</Label>
        <Input type='email' placeholder='email' />
      </FormGroup>
      <FormGroup>
        <Label> password</Label>
        <Input type='password' placeholder='password' />
      </FormGroup>
      <Button className="btn-lg btn-dark btn-block" > 
      Log in 
      </Button>
      <div className="text-center pt-3">Or continue with your facebook account 
      </div>
      <FacebookLoginButton className='mb-3 mt-3'/>
      <div className='text-center'>
        <a href="/sign-up">Sign up </a> 
        <span className='p-2'>|</span> 
        <a href="/forgot-password">Forgot password </a> 
      </div>
    </Form>
  );
}

export default App;
