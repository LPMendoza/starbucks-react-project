import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
  </React.StrictMode>,
  document.getElementById('header')
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>,
  document.getElementById('footer')
);

