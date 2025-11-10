import logo from './logo.svg';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Projects from './pages/Projects.js';
import NotFound from './pages/NotFound.js'

function App() {
  return (
      <>
        <Header />
        <main className="container my-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </>
  );
}

export default App;
