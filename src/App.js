import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import Intro from './components/Intro';
import Techstack from './components/Techstack';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';
import BackToTopBtn from './features/backToTopBtn/BackToTopBtn';

function App() {
    return (
        <Container fluid className='App'>
            <div className='app-wrapper'>
            <Header />
            <Intro />
            </div>
            <BackToTopBtn />
            <Techstack />
            <Projects />
            <About />
            <Footer />
        </Container>
    );
}

export default App;
