import './App.css';
import { Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound'
import ContactMe from "./pages/ContactMe";
import Skills from './pages/Skills';
import { PageTheme } from './PageTheme';

function App() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <PageTheme>
                <Header />
                <main className="flex-grow-1 d-flex flex-column">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<ContactMe />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
                <Footer />
            </PageTheme>
        </div>
    );
}

export default App;