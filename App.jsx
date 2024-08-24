/* eslint-disable no-unused-vars */
import './App.css';
import {useRef} from 'react';
import Navbar from './component/Navbar';
import Heroo from './component/Heroo';
import About from './component/About';
import Experience from './component/Experience';
import Tech from './component/Tech';
import Works from './component/Works';
import Contact from './component/Contact';
import { BrowserRouter, HashRouter } from "react-router-dom";
function App() {



  
return(

<HashRouter>
<Navbar /> 
<Heroo/>
<About/>
<Experience/>
<Tech/>
<Works/>
<Contact/>
</HashRouter>
  

  );
}

export default App;
