import './css/App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* <Route path='/' element={}/> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
