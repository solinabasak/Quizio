
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './component/NavbarComp';
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import Signup from "./component/Signup/Signup";

function App() {
  return (
    <div className="App">
      <NavbarComp/>
      <Login/>
     {/* <Register/>*/}
      <Signup/>
      
    </div>
  );
}

export default App;
