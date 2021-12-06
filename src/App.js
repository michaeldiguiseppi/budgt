import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="main-navigation">
        <div className="link-container">
          <Link to="/">Dashboard</Link>
          <Link to="/income">Income</Link>
          <Link to="/expenses">Expenses</Link>
          <Link to="/transactions">Transactions</Link>
        </div>
        <div className="footer">
          <Link to="/settings">Settings</Link>
        </div>
      </div>
      <section className="main-section">
        <Outlet />
      </section>
    </div>
  );
}

export default App;
