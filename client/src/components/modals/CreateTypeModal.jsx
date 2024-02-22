import { Button, Form, Modal } from 'react-bootstrap';

const CreateTypeModal = ({ show, onHide }) => {
  return (
    <div>
      <Modal show={show} onHide={onHide} size='lg' centered>
        <Modal.Header closeButton>
          <Modal.Title>add type</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control placeholder='type name...' />
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

export default CreateTypeModal;
