import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useHistory } from 'react-router-dom';
import { Context } from '../index';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const history = useHistory();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  };

  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>
          BuySome
        </NavLink>
        {user.isAuth ? (
          <Nav className='ml-auto' style={{ color: 'white' }}>
            <Button
              variant={'outline-light'}
              onClick={() => history.push(ADMIN_ROUTE)}
            >
              Admin
            </Button>
            <Button
              variant={'outline-light'}
              onClick={() => logOut()}
              className='ml-2'
            >
              Log out
            </Button>
          </Nav>
        ) : (
          <Nav className='ml-auto' style={{ color: 'white' }}>
            <Button
              variant={'outline-light'}
              onClick={() => history.push(LOGIN_ROUTE)}
            >
              Auth
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
