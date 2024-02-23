import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { createBrand } from '../../api/deviceAPI';

const CreateBrandModal = ({ show, onHide }) => {
  const [brandName, setBrandName] = useState('');
  const addBrand = () => {
    createBrand({ name: brandName }).then(data => setBrandName(''));
    onHide();
  };

  return (
    <div>
      <Modal show={show} onHide={onHide} size='lg' centered>
        <Modal.Header closeButton>
          <Modal.Title>add brand</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
              placeholder='brand name...'
              value={brandName}
              onChange={e => setBrandName(e.target.value)}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='outline-danger' onClick={onHide}>
            close
          </Button>
          <Button variant='outline-success' onClick={addBrand}>
            add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CreateBrandModal;
