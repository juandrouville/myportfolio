import './app.css';
import Nav from './components/Nav/Nav';
import Presentation from './components/Presentation/Presentation';
import SubNav from './components/SubNav/SubNav';

function App() {
  return (
    <div className="App">
      <div className='conteinerApp'>
        <Nav/>
        <SubNav/>
        <Presentation/>
      </div>
    </div>
  );
}

export default App;
