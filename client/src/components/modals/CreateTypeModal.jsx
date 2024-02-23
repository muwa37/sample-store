import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { createType } from '../../api/deviceAPI';

const CreateTypeModal = ({ show, onHide }) => {
  const [typeName, setTypeName] = useState('');
  const addType = () => {
    createType({ name: typeName }).then(data => setTypeName(''));
    onHide();
  };

  return (
    <div>
      <Modal show={show} onHide={onHide} size='lg' centered>
        <Modal.Header closeButton>
          <Modal.Title>add type</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
              placeholder='type name...'
              value={typeName}
              onChange={e => setTypeName(e.target.value)}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='outline-danger' onClick={onHide}>
            close
          </Button>
          <Button variant='outline-success' onClick={addType}>
            add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CreateTypeModal;
