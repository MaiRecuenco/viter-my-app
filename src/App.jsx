import DashboardHome from "./components/pages/developer/home/DashboardHome";
import Home from "./components/pages/website/home/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PageNotFound from "./components/partials/PageNotFound";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashboardHome />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
