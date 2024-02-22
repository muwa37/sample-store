import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <div>
      <Container
        className='d-flex justify-content-center align-items-center'
        style={{ height: window.innerHeight - 54 }}
      >
        <Card style={{ width: 600 }} className='p-5'>
          <h2 className='m-auto'>{isLogin ? 'Auth' : 'Registration'}</h2>
          <Form className='d-flex flex-column'>
            <Form.Control className='mt-3' placeholder='email...' />
            <Form.Control className='mt-3' placeholder='password...' />
            <Row className='d-flex justify-content-between mt-3 pl-3 pr-3'>
              {isLogin ? (
                <div>
                  <NavLink to={REGISTRATION_ROUTE}>registration</NavLink>
                </div>
              ) : (
                <div>
                  <NavLink to={LOGIN_ROUTE}>login</NavLink>
                </div>
              )}
              <Button
                className='mt-3 align-self-end'
                variant={'outline-success'}
              >
                {isLogin ? 'log in' : 'register'}
              </Button>
            </Row>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default Auth;
