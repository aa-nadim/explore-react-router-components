import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
