import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import TPSoloIDS from './components/TPSoloIDS.jsx';
import TPIDsTitles from './components/TPIDsTitles';
import TPIDsUserIDs from './components/TPIDsUserIDs';
import TPRIDTitle from './components/TPRIDTitle';
import TPRIDUserID from './components/TPRIDUserID';
import TPSRIDTitle from './components/TPSRIDTitle';
import TPSRIDUserID from './components/TPSRIDUserID';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container">
          <NavLink exact to="/" className="navbar-brand">INICIO</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <NavItem to="/" text="Solo IDS Pendientes" />
              <NavItem to="/todos-titles" text="IDs Y Titles Pendientes" />
              <NavItem to="/unresolved-todos" text="ID Y Title SinResolver" />
              <NavItem to="/resolved-todos" text="ID Y Title Resueltos" />
              <NavItem to="/todos-userids" text="IDs Y UserID Pendientes" />
              <NavItem to="/resolved-todos-userids" text="ID Y UserID Resueltos" />
              <NavItem to="/unresolved-todos-userids" text="ID Y UserID SinResolver" />
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route exact path="/" element={<TPSoloIDS />} />
          <Route path="/todos-titles" element={<TPIDsTitles />} />
          <Route path="/unresolved-todos" element={<TPSRIDTitle />} />
          <Route path="/resolved-todos" element={<TPRIDTitle />} />
          <Route path="/todos-userids" element={<TPIDsUserIDs />} />
          <Route path="/resolved-todos-userids" element={<TPRIDUserID />} />
          <Route path="/unresolved-todos-userids" element={<TPSRIDUserID />} />
        </Routes>
      </div>
    </Router>
  );
};

// Componente para los elementos de la Navbar
const NavItem = ({ to, text }) => {
  return (
    <li className="nav-item">
      <NavLink exact to={to} className="nav-link" activeClassName="active">{text}</NavLink>
    </li>
  );
};

export default App;
