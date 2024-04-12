import logo from './logo.svg';
import './App.css';
import Login from './screens/Login/Login'; //states done
import Signup from './screens/signup/Signup';
import Otp from './screens/signup/Otp';
import ForgotPass from './screens/signup/ForgotPass';
import VerifyEmail from './screens/signup/VerifyEmail';
import ResetPass from './screens/signup/ResetPass';

function App() {
  return (
    <>
      <Signup />
    </>
  );
}

export default App;
