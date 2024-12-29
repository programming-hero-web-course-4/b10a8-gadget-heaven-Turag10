
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Statistics from "./pages/Statistics";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav className="bg-purple-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Gadget Heaven</h1>
            <ul className="flex gap-6">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/statistics" className="hover:underline">
                  Statistics
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:underline">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
