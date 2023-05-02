import './App.css';
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import Nfc from './pages/Nfc/Nfc';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/nfc' element={<Nfc />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
