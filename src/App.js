import logo from './logo.svg';
import './App.css';
import React from 'react';
import Site from './pages/site';
import ContactsPage from './pages/contactPage';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

const  App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/contactPage/:id" element={<ContactsPage />}/>
        <Route path="/" element={<Site />}/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
