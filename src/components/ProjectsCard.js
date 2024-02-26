import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import Badge from 'react-bootstrap/Badge';
import Icon from '@reacticons/bootstrap-icons';

const ProjectsCard = () => {
    return (
        <Container fluid>
            <Row>
                {/* Left side menu */}
                <Tab.Container defaultActiveKey='#link1'>
                    <Col>
                        <Row>
                            <Col sm={4}>
                                <ListGroup data-bs-theme='light'>
                                    {itemData.map((item, idx) => (
                                        <ListGroup.Item
                                            key={idx}
                                            action
                                            href={`#link${idx + 1}`}
                                            className=' border-0 rounded-3 mb-2 list-group-item-secondary'
                                            style={{
                                                background: 'transparent',
                                                fontSize: '1.5rem',
                                                fontWeight: 500
                                            }}
                                            onMouseOver={(e) =>
                                                (e.target.style.backgroundColor =
                                                    '#292b2c')
                                            }
                                            onMouseOut={(e) =>
                                                (e.target.style.backgroundColor =
                                                    'transparent')
                                            }
                                        >
                                            {item.title}
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </Col>
                        </Row>
                    </Col>

                    {/* Right side menu */}

                    <Col sm={8}>
                        <Container>
                            <Tab.Content>
                                {itemData.map((item, idx) => (
                                    <Tab.Pane
                                        key={idx}
                                        eventKey={`#link${idx + 1}`}
                                    >
                                        <Card className='bg-dark text-white'>
                                            <Card.Img
                                                src={item.img}
                                                alt='Card image'
                                                style={{
                                                    height: '450px',
                                                    width: 'auto',
                                                    objectFit: 'cover'
                                                }}
                                            />
                                            <Card.ImgOverlay
                                                style={{
                                                    background:
                                                        'rgba(0, 0, 0, 0.82)'
                                                }}
                                            >
                                                <Card.Title
                                                    className='text-start'
                                                    style={{
                                                        fontSize: '1.4rem',
                                                        fontWeight: 600
                                                    }}
                                                >
                                                    <u>{item.title}</u>
                                                </Card.Title>
                                                <Card.Text
                                                    className='pt-3 text-start'
                                                    style={{
                                                        whiteSpace: 'pre-line',
                                                        fontSize: '1.2rem'
                                                    }}
                                                >
                                                    {item.description}
                                                </Card.Text>
                                            
                                                <Col className='text-start'>
                                                    {item.techStack.map(
                                                        (tech, index) => (
                                                            <Badge
                                                                bg='secondary'
                                                                key={index}
                                                                className='me-1'
                                                            >
                                                                #{tech}
                                                            </Badge>
                                                        )
                                                    )}
                                                </Col>
                                                <Col className='mt-4 text-start'>
                                                    <Button
                                                        href='#'
                                                        variant='warning'
                                                        
                                                    >
                                                        <Icon
                                                            name='display'
                                                            style={{
                                                                marginRight: 5
                                                            }}
                                                        />
                                                        Live Demo
                                                    </Button>
                                                    <Button
                                                        href='#'
                                                        variant='outline-light'
                                                        className='mx-3'
                                                    >
                                                        <Icon
                                                            name='github'
                                                            style={{
                                                                marginRight: 5
                                                            }}
                                                        />
                                                        Code
                                                    </Button>
                                                </Col>
                                            </Card.ImgOverlay>
                                        </Card>
                                    </Tab.Pane>
                                ))}
                            </Tab.Content>
                        </Container>
                    </Col>
                </Tab.Container>
            </Row>
        </Container>
    );
};

const itemData = [
    {
        img: require('../assets/projectsImg/ufit.jpg'),
        title: 'uFit',
        description:
            'React Native fitness app — lets users find instructions for different workouts with an easy-to-use interface. \nUsers can track workouts using built-in templates and track weight loss progress.',
        techStack: ['React Native'],
        demo: 'link1',
        github: 'link2'
    },
    {
        img: require('../assets/projectsImg/lambo.jpg'),
        title: 'Lambo',
        description:
            'React Native fitness app — lets users find instructions for different workouts with an easy-to-use interface. \nUsers can track workouts using built-in templates and track weight loss progress. Asdasdasdasdasd asdasd asdasd asdasd asd',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        demo: 'link1',
        github: 'link2'
    }
];

export default ProjectsCard;
