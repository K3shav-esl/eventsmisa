import logo from './logo.svg';
import './App.css';
import Login from './screens/Login/Login'; //states done
import Signup from './screens/signup/Signup';//states done
import Otp from './screens/signup/Otp'; // states done
import ForgotPass from './screens/signup/ForgotPass'; // state done
import VerifyEmail from './screens/signup/VerifyEmail'; // state done 
import ResetPass from './screens/signup/ResetPass'; // state done
import AboutUs from './screens/About/AboutUs';
import Help from './screens/About/Help';
import Terms from './screens/About/Terms';



function App() {
  return (
    <>
      <Login />
    </>
  );
}

export default App;
