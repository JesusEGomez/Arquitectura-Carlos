
import './App.css';
import { Home } from './pages';
import { NavBar, Footer } from './components';
import { useState } from 'react';

const App=() => {
  const [isOpen, setIsOpen] = useState(false)

  const onHandlerMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className="principal-Container">
      <NavBar
      isOpen={isOpen}
      onCLose={onHandlerMenu}/>
      <Home/>
      <Footer />
      
      
    </div>
  );
}

export default App;
