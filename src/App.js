import react from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import "./app.scss";

function App() {
  return (
    <div className="components">
      <Home />
      <Navbar />
    </div>
  );
}

export default App;
