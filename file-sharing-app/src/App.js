// src/App.js
import React from 'react';
import UploadForm from './components/UploadForm';
import logo from './assets/logo.png'; // Optional: If you have a logo

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 py-4">
        <div className="container mx-auto px-4 flex items-center">
          {/* Uncomment if you have a logo */}
          {/* <img src={logo} alt="AnonFiles Clone" className="h-8 mr-4" /> */}
          <h1 className="text-2xl font-bold">AnonFiles Clone</h1>
        </div>
      </header>
      <main className="container mx-auto px-4">
        <UploadForm />
      </main>
      <footer className="bg-gray-800 py-4 mt-10">
        <div className="container mx-auto px-4 text-center text-gray-400">
          &copy; {new Date().getFullYear()} AnonFiles Clone. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
