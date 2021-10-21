import React from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import '../styles/auth.scss';
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from '../utils/consts';
import { NavLink, useLocation } from 'react-router-dom';


function Auth() {
    const location = useLocation()  //для отрисовки страницы в зависимости от ссылки
    console.log(location);  //локация страницы, на кот.находимся
    const isLogin = location.pathname === LOGIN_ROUTE; 
    
    return (
        <Container className='auth'>
            <Card className='auth__card'>
                <h2 className='auth__card-title'>{isLogin ? 'Authorization' : 'Registration'}</h2>

                <Form className='auth__form'>
                    <Form.Control 
                        className='auth__form-input' 
                        placeholder='Введите email..'>
                    </Form.Control>
                    <Form.Control 
                        className='auth__form-input' 
                        placeholder='Введите пароль..'>
                    </Form.Control>

                    <Row className='auth__footer'>
                        {isLogin ?
                            <div className='auth__footer-registration'>
                                <NavLink to={REGISTRATION_ROUTE}>Регистрация</NavLink>
                            </div>
                            :
                            <div className='auth__footer-registration'>
                                <NavLink to={LOGIN_ROUTE}>Войти</NavLink>
                            </div>
                        }
                            <Button variant='outline-success' className='auth__footer-btn'>
                                {isLogin ? 'Войти' : 'Регистрация'}
                            </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    )
}

export default Auth;