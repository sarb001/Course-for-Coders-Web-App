import React from 'react';
import { BrowserRouter as Router , Route ,Routes } from 'react-router-dom'
import Home from './Components/Home/Home';
import Header from './Components/Layout/Header/Header';
import Courses from './Components/Courses/Courses';

function App() {
  return (
     <>
     <Router>
            <Header />
         <Routes>
            <Route exact path = "/"  element= {<Home />}> </Route>
            <Route exact path = "/courses"  element= {<Courses />}> </Route>
         </Routes>
     </Router>
     </>
  );
}

export default App;
