import './app.css';
import { Route , Routes } from "react-router-dom";
import LanguageProvider from './context/languageContext';
import Home from './components/Home/Home';
import ScreenProyects from './components/Developer/ScreenProyects/ScreenProyects';
import PageWorking from './components/PageWorking/PageWorking';
import NewHome from './components/NewHome/NewHome';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
          <div className='conteinerApp'>
            <Routes>
              <Route exact path = "/" element={<Home/>}/>
              <Route path='/developer' element={<ScreenProyects/>}/>
              <Route path='/designer' element={<PageWorking/>}/>
              <Route path='/newHome' element ={<NewHome/>}/>
            </Routes>
          </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
