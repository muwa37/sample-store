import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import bigStar from '../assets/bigStar.png';

const DevicePage = () => {
  const device = { id: 2, name: 'sample2', price: 228, rating: 3, img: 'asd' };
  const description = [
    {
      id: 1,
      title: 'memo',
      description: '6gb',
    },
    {
      id: 2,
      title: 'screen',
      description: '14inch',
    },
    {
      id: 3,
      title: 'proc',
      description: 'pent 3',
    },
  ];

  return (
    <Container className='mt-3'>
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.img} />
        </Col>
        <Col md={4}>
          <Row className='d-flex flex-column align-items-center'>
            <h2>{device.name}</h2>
            <div
              className='d-flex align-items-center justify-content-center'
              style={{
                background: `url(${bigStar}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: 'cover',
                fontSize: '64',
              }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className='d-flex flex-column align-items-center justify-content-around'
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: '5px solid lightgray',
            }}
          >
            <h3>{device.price} $</h3>
            <Button variant={'outline-dark'}>add to cart</Button>
          </Card>
        </Col>
      </Row>
      <Row className='d-flex flex-column m-3'>
        <h1>specifics</h1>
        {description.map((info, index) => (
          <Row
            key={info.id}
            style={{
              background: index % 2 === 0 ? 'lightgray' : 'transparent',
              padding: 10,
            }}
          >
            {info.title}: {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default DevicePage;
