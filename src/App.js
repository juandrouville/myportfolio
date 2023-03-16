import './app.css';
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
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
