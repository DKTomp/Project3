import './App.css';
import Todo from './Pages/Todo';
import Contact from './Pages/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todo />} /> 
        <Route path="/contact" element={<Contact />} />    
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
