
import './App.css';
import { NavBar, Footer } from './components';
import { useState } from 'react';
import Router  from "./router"
const App=() => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdown, setIsDropdown] = useState(false)

  const onHandlerMenu = () => {
    setIsOpen(!isOpen);
  };
  const onHandlerDropdown = () => {
    setIsDropdown(!isDropdown);
  };


  return (
    <div className="principal-Container">
      <NavBar
      isOpen={isOpen}
      onCLose={onHandlerMenu}
      isDropDown={isDropdown}
      onDrop={onHandlerDropdown}/>
      <Router />
      <Footer />
      
      
    </div>
  );
}

export default App;
