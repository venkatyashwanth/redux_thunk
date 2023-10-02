import "./App.css";
import Header from "./containers/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductDetail from "./containers/ProductDetail";
import ProductListing from "./containers/ProductListing";
import Notfound from "./containers/Notfound";
import "./scss/style.scss";
function App() {
  return (
    <div className="App">
      <Header />
      
      <Router>
      <nav className="navigation-bar">
        <ul>
          <li>
            <Link to="/">ProductListing</Link>
          </li>
        </ul>
      </nav>
        <Routes>
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/" element={<ProductListing />} />
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
