import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import Footer from './components/Footer/Footer';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
            <div className="App">
                <Navbar />
                <Landing />
                <Footer />
            </div>
    </AuthProvider>
  );
}

export default App;