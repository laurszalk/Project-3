import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Navbar/Nav";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Footer from "./components/Footer/Footer";
// import { Cart } from "./pages/cart/cart";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Detail />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
