import "./App.css";
import Aside from "./pages/Aside";
import Footer from "./pages/Footer";
import Main from "./pages/Main";
import Navbar from "./pages/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
