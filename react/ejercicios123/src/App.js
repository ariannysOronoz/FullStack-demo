import logo from './logo.svg';
import './App.css';
import { Contacto } from './class/Contacto';
import ContactoComponent from './component/component  A/ContactoComponent';
import { ContactoState } from './state/ContactoState';

function App() {
  const contactoState = ContactoState (
    new Contacto( 'Ana', 'Bello', 'anagmail', true)
  );
  
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
            <div>
                <h1>
                ABOUT CONTACT:
                </h1>  
            </div>
            <ContactoComponent contacto = { contactoState } /> 
        </div>
      </header>
    </div>
  );
}

export default App;
