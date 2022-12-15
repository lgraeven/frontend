import './css/App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* <Route path='' element={}/> */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
