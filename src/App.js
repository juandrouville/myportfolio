import './app.css';
import Modal from './components/Modal/Modal';
import Nav from './components/Nav/Nav';
import Presentation from './components/Presentation/Presentation';
import SubNav from './components/SubNav/SubNav';
import LanguageProvider from './context/languageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <div className='conteinerApp'>
          <Nav/>
          <SubNav/>
          <Presentation/>
          <Modal/>
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
