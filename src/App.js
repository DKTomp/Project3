import './App.css';
import NavBar from './Pages/Header';
import Todo from './Pages/Todo';
import Contact from './Pages/Contact';
import About from './Pages/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todo />} /> 
        <Route path="/contact" element={<Contact />} />  
        <Route path="/about" element={<About />} />  
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
