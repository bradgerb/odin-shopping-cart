import './App.css'
import Nav from './components/Navigation/Nav';
import { Outlet } from "react-router";

const App = () => {
  return (
    <div>
      <Nav />
      <h1>Welcome to the default page!</h1>
      {/* <Outlet /> */}
    </div>
  );
};

export default App
