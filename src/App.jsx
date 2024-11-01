import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Library } from './pages/Library';
import { ContactForm } from './pages/ContactForm';
import './App.css'

const App = () => {
  return (
    <Router>
 
  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
       
    </Router>
  );
};

export default App;

