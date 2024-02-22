import { Button, Form, Modal } from 'react-bootstrap';

const CreateBrandModal = ({ show, onHide }) => {
  return (
    <div>
      <Modal show={show} onHide={onHide} size='lg' centered>
        <Modal.Header closeButton>
          <Modal.Title>add brand</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control placeholder='brand name...' />
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

export default CreateBrandModal;
