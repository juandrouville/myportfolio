import './app.css';
import { Route, Routes } from "react-router-dom";
import LanguageProvider from './context/languageContext';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import ScreenProyects from './components/Developer/ScreenProyects/ScreenProyects';
import PageWorking from './components/PageWorking/PageWorking';
import Lenguajes from './components/Lenguajes/Lenguajes';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Nav/>
        <Lenguajes/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='/developer' element={<ScreenProyects />} />
          <Route path='/designer' element={<PageWorking />} />
        </Routes>
      </div>
    </LanguageProvider>
  );
}

export default App;
