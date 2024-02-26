import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Icon from '@reacticons/bootstrap-icons';

const About = () => {
    return (
        <Container  style={{ marginTop: '10%', paddingBottom: '150px', width: '100%'}}>
            <Row className='mt-3 px-5  text-light text-start'>
                <h3>
                    <small
                        className='text-body-success'
                        style={{ fontWeight: 300 }}
                    >
                        Hello,
                    </small>
                </h3>
                <h1 className='display-2'>
                    I'm{' '}
                    <span style={{ fontWeight: 600, color: 'yellow' }}>
                        Shakhzod
                    </span>
                </h1>
                <h2
                    className='pt-3 text-break fs-4'
                    style={{ fontWeight: 300 }}
                >
                    {' '}
                    I build websites and apps
                </h2>
                <Col>
                    <Button variant='outline-info' className='mt-3'>
                        {' '}
                        <Icon
                            name='file-earmark-person-fill'
                            style={{ paddingRight: 5 }}
                        />
                        My Resume
                    </Button>{' '}
                </Col>
            </Row>
        </Container>
    );
};

export default About;
