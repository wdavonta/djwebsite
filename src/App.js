import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import './App.css';

function App() {

  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    switch(currentPage) {
        case 'Contact':
        return <ContactForm />;
      default:
        return <About />;
        case 'About':
        return <About />;
        case 'Portfolio':
          return <Portfolio />;


    }
  }

  return (
    <div>
    <Nav currentPage={currentPage} handlePageChange={handlePageChange} />

    <main>
      {
        // Render the component returned by 'renderPage()'
        // YOUR CODE HERE
        <div>{renderPage(currentPage)}</div>
        //
      }
    </main>
 
    </div>
  );
}

export default App;
