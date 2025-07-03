import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Exchanges from './pages/Exchanges';
import Community from './pages/Community';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import ConnectionDetail from './pages/ConnectionDetail';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/exchanges" element={<Exchanges />} />
            <Route path="/community" element={<Community />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/connection/:id" element={<ConnectionDetail />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;