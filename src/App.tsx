import { useState } from 'react';
//import './App.css';
import './style.css';

function App() {
  const [action, setAction] = useState("Signin");

  const signInAction = () => {
    console.log("=====sign in my==========");
    setAction("Signin");
  };

  const logInAction = () => {
    console.log("=====Log in  my===========");
    setAction("Login");
  };

  return (
    <>
      <div className="box-form">
        <div className="left">
          <div className="overlay">
            <h1>{action === "Signin"? "Start Your Journey" : " Access Your Account "}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur et est sed felis aliquet sollicitudin
            </p>
            
          </div>
        </div>

        <div className="right">
          <h5>{action}</h5>
          <br />
          <br />

          <div className="inputs">
            <input type="text" placeholder="User name" />
            <br />
            <input type="password" placeholder="Password" />
          </div>
          
          <br /><br />

          <div className="remember-me--forget-password">
            <label>
              <input type="checkbox" name="item" defaultChecked />
              
            </label>
            <p>Forget password?</p>
          </div>

          <br />
          <button style={{ marginRight: '20px', fontSize: '14px' }} onClick={logInAction}>Login</button>
          <br />
          <hr />
          <button style={{ marginRight: '20px', fontSize: '14px' }} onClick={signInAction}>Sign in</button>

        </div>
      </div>
    </>
  );
}

export default App;
