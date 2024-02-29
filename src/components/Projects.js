import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
    return (
        <Container id='projects' style={{ marginTop: '10%', marginBottom: '200px'}}>
            <Row>
                <Col className='mt-3 p-5  text-light '>
                    <h2 className='display-2' style={{ fontWeight: 600 }}>
                        
                        Projects
                    </h2>
                </Col>
            </Row>
            <Container className='mt-5'>
            <ProjectsCard />
            </Container>
        </Container>
    );
};

export default Projects;
