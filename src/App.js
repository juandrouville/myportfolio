import './app.css';
import { Route , Routes } from "react-router-dom";
import LanguageProvider from './context/languageContext';
import Home from './components/Home/Home';
import ScreenProyects from './components/Developer/ScreenProyects/ScreenProyects';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
          <div className='conteinerApp'>
            <Routes>
              <Route exact path = "/" element={<Home/>}/>
              <Route path='/developer' element={<ScreenProyects/>}/>
            </Routes>
          </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
