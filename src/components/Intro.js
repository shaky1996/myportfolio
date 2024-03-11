import React, { useState, useEffect } from 'react';
import './components.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Icon from '@reacticons/bootstrap-icons';
import Blob from '../features/blob/Blob';
import BgImg from '../features/bgimg/BgImg';
import Resume from '../assets/resume/Shakhzod_Yuldashev_Resume.pdf'

const Intro = () => {
    const [isXsScreen, setIsXsScreen] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsXsScreen(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Container
            className='reveal-container'
            style={{
                marginTop: '10%',
                marginBottom: '100px',
                paddingBottom: '100px'
            }}
        >
            <Row className='mt-3 py-5 text-light'>
                <Col xs={6} className='text-start'>
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
                    <a
                        href={Resume}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <Button variant='outline-info' className='mt-3'>
                            <Icon
                                name='file-earmark-person-fill'
                                style={{ paddingRight: 5 }}
                            />
                            My Resume
                        </Button>
                    </a>
                    <Col style={{ fontSize: '2em' }}>
                        <a
                            href='https://www.linkedin.com/in/shak-yuldashev/'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <Icon name='linkedin' className='px-2' />
                        </a>
                        <a
                            href='https://github.com/shaky1996'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <Icon
                                name='github'
                                className='px-2'
                                style={{ color: 'white' }}
                            />
                        </a>
                    </Col>
                </Col>
                {!isXsScreen && (
                    <Col className='align-items-start pt-4'>
                        <Blob />
                        <BgImg />
                    </Col>
                )}
            </Row>
        </Container>
    );
};

export default Intro;
