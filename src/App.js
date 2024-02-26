import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import About from './components/About';
import Techstack from './components/Techstack';
import Projects from './components/Projects';

function App() {
    return (
        <Container fluid className='App'>
            <Header />
            <About />
            <Techstack />
            <Projects />
        </Container>
    );
}

export default App;
