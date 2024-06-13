import React, { useEffect, useState } from 'react';
import Navbar from './Navbar'
import Home from './Home';
import About from './About';
import Services from './Services';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';
import Reset from './Reset';
import Preloader from './Preloader'

function MyApp() {
  return (
    <>
      <Reset />
      <Navbar />
      <Home />
      <About />
      <Services />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

function App() {

  const [customRender, setCustomRender] = useState(<Preloader/>);

  // var setPromise = () => { 
  //    return new Promise((resolve, reject) => {if(resolve){resolve();}else{reject()};}); 
  // }

  const renderIt = (component, callback) => {
      callback(component);
  }
  useEffect(()=>{
    
    // setPromise().then(()=>{setCustomRender(<MyApp/>)}).catch(()=>{
    //   setCustomRender("Hala");
    // })
    //setTimeout(()=>{setCustomRender(<MyApp/>)}, 1000);

    renderIt(<MyApp/>, setCustomRender);
  },[])


  return (
    <>
      {customRender}
    </>
  );

}

export default App;
