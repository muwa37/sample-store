import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateBrandModal from '../components/modals/CreateBrandModal';
import CreateDeviceModal from '../components/modals/CreateDeviceModal';
import CreateTypeModal from '../components/modals/CreateTypeModal';

const Admin = () => {
  const [typeVisible, setTypeVisible] = useState(false);
  const [brandVisible, setBrandVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);

  return (
    <Container className='d-flex flex-column'>
      <Button
        variant='outline-dark'
        className='mt-2 p-2'
        onClick={() => setTypeVisible(true)}
      >
        add type
      </Button>
      <Button
        variant='outline-dark'
        className='mt-2 p-2'
        onClick={() => setBrandVisible(true)}
      >
        add brand
      </Button>
      <Button
        variant='outline-dark'
        className='mt-2 p-2'
        onClick={() => setDeviceVisible(true)}
      >
        add device
      </Button>
      <CreateTypeModal
        show={typeVisible}
        onHide={() => setTypeVisible(false)}
      />
      <CreateBrandModal
        show={brandVisible}
        onHide={() => setBrandVisible(false)}
      />
      <CreateDeviceModal
        show={deviceVisible}
        onHide={() => setDeviceVisible(false)}
      />
    </Container>
  );
};

export default Admin;
