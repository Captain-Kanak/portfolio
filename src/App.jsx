import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="px-4 lg:px-0">
        <Outlet />
      </div>
    </>
  );
}

export default App;
