import logo from './logo.svg';
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Main/Landing';
import Gallery from './Main/Gallery';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Gallery-lpk" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
