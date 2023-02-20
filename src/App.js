
import './App.css';
import { NavBar, Menu } from './components';
import { useState } from 'react';

const App=() => {
  const [isOpen, setIsOpen] = useState(false)

  const onHandlerMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className="principal-Container">
      <NavBar 
      onCLose={onHandlerMenu}
      />
      <Menu
      isOpen={isOpen}/>
    </div>
  );
}

export default App;
