import React, { useContext } from 'react';
import { Context } from '..';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { SHOP_ROUTE } from '../utils/consts';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import '../styles/navbar.scss';

const NavBar = observer(() => {     //observer рендерит в настоящем времени
    const {user} = useContext(Context);     //в зависимости от того авторизован или нет
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink to={SHOP_ROUTE} className='navbar__name'>CanBuy</NavLink>      {/**на главную */}
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color:'white'}}>
                        <Button variant='outline-light' className='nav__btn'>Admin Panel</Button>
                        <Button variant='outline-light' className='nav__btn'>Log out</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color:'white'}}>
                        <Button variant='outline-light' className='nav__btn'>Log in</Button>
                        <Button variant='outline-light'
                            onClick={() => user.setIsAuth(true)}
                            className='nav__btn'
                        >Authorization</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    )
})

export default NavBar;