import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import Intro from './components/Intro';
import Techstack from './components/Techstack';
import Projects from './components/Projects';
import About from './components/About';

function App() {
    return (
        <Container fluid className='App'>
            <Header />
            <Intro />
            <Techstack />
            <Projects />
            <About />
        </Container>
    );
}

export default App;
