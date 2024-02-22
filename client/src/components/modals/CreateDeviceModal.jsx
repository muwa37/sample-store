import { useContext, useState } from 'react';
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import { Context } from '../..';

const CreateDeviceModal = ({ show, onHide }) => {
  const { device } = useContext(Context);
  const [info, setInfo] = useState([]);

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }]);
  };
  const removeInfo = number => {
    setInfo([...info].filter(i => i.number !== number));
  };

  return (
    <div>
      <Modal show={show} onHide={onHide} size='lg' centered>
        <Modal.Header closeButton>
          <Modal.Title>add type</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Dropdown className='mt-2'>
              <Dropdown.Toggle>select type</Dropdown.Toggle>
              <Dropdown.Menu>
                {device.types.map(type => (
                  <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className='mt-2'>
              <Dropdown.Toggle>select brand</Dropdown.Toggle>
              <Dropdown.Menu>
                {device.brands.map(brand => (
                  <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            <Form.Control className='mt-3' placeholder='device name...' />
            <Form.Control
              className='mt-3'
              placeholder='device price...'
              type='number'
            />
            <Form.Control className='mt-3' type='file' />
            <Button variant='outline-dark' onClick={addInfo}>
              add new specification
            </Button>
            {info.map(i => (
              <Row className='mt-3' key={i.number}>
                <Col md={4}>
                  <Form.Control placeholder='title...' />
                </Col>
                <Col md={4}>
                  <Form.Control placeholder='description...' />
                </Col>
                <Col md={4}>
                  <Button
                    variant={'outline-danger'}
                    onClick={() => removeInfo(i.number)}
                  >
                    remove
                  </Button>
                </Col>
              </Row>
            ))}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='outline-danger' onClick={onHide}>
            close
          </Button>
          <Button variant='outline-success' onClick={onHide}>
            add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CreateDeviceModal;
