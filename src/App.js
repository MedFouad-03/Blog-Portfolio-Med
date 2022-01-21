import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  About from './pages/About';
import TouchMe from './pages/Touch';
import Portfolio from './pages/Portfolio';
import FrontEnd from './pages/Website';
import Descript from './pages/Description';
import SEO from './pages/SquareSpace';
import {Routes, // Just Use Routes instead of "Switch"
  Route,
} from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import Pied from './components/Footer';

function App() {
  return (
   <>
    <NavigationBar />
    
     <Routes>
      <Route path="/touch" element={<TouchMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/squareSpace" element={<SEO />} />
        <Route path="/website" element={<FrontEnd />} />
        <Route path="/description" element={<Descript />} />
    </Routes>
    <Pied />
    </>
  );
}

export default App;
