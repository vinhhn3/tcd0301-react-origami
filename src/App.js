import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Footer from "./components/layout/Footer";
import Home from "./components/layout/Home";
import Navbar from "./components/layout/Navbar";
import OrigamiState from "./context/origami/OrigamiState";
function App() {
  return (
    <OrigamiState>
      <Router>
        <div className="App">
          <Navbar />
          <Home />
          <Footer />
        </div>
      </Router>
    </OrigamiState>
  );
}

export default App;
