import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Footer from "./components/layout/Footer";
import Home from "./components/layout/Home";
import Navbar from "./components/layout/Navbar";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
