// import React, { useState } from 'react';
// import Nav from './components/Nav';
// import About from './components/About';
// import ContactForm from './components/Contact';
// import Portfolio from './components/Portfolio';
// import './App.css';

// function App() {

//   const [currentPage, handlePageChange] = useState('About');

//   const renderPage = () => {
//     switch(currentPage) {
//         case 'Contact':
//         return <ContactForm />;
//       default:
//         return <About />;
//         case 'About':
//         return <About />;
//         case 'Portfolio':
//           return <Portfolio />;


//     }
//   }

//   return (
//     <div>
//     <Nav currentPage={currentPage} handlePageChange={handlePageChange} />

//     <main>
//       {
//         // Render the component returned by 'renderPage()'
//         // YOUR CODE HERE
//         <div>{renderPage(currentPage)}</div>
//         //
//       }
//     </main>
 
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import Navbar from './components/Nav';
// // import Home from './components/Home';
// import About from './components/About';
// import Portfolio from './components/Portfolio';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import './App.css';

// function App() {


//   return (
//       <Router>
//         <Navbar />
//         <Switch>
//           {/* <Route path='/' exact component={Home} /> */}
//           <Route path='/About' component={About} />
//           <Route path='/Portfolio' component={Portfolio} />
//           <Route path='/Contact' component={Contact} />
//           {/* <Route path='/sign-up' component={SignUp} /> */}
//         </Switch>
//         <Footer />
//       </Router>
//     );
//   }

// export default App;


import React from "react";
import './App.css';
import Navbar from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Home from '/';
import About from './components/About/about';
import Contact from './components/About/about';
import Portfolio from './components/About/about';
// import SignIn from './pages/signin';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        {/* <Route path="/" exact components={Home} /> */}
        <Route path="/About" components={About} />
        <Route path="/Contact" components={Contact} />
        <Route path="/Portofolio" components={Portfolio} />
        {/* <Route path="/sign-up" component={SignUp} /> */}
      </Switch>
    </Router>
  );
}

export default App;