import React from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import '../styles/auth.scss';
import {REGISTRATION_ROUTE} from '../utils/consts';
import { NavLink, useLocation } from 'react-router-dom';


function Auth() {
    return (
        <Container className='auth'>
            <Card className='auth__card'>
                <h2 className='auth__card-title'>Authorization</h2>

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
                        <div className='auth__footer-registration'>
                            <NavLink to={REGISTRATION_ROUTE}>Регистрация</NavLink>
                        </div>
                        <Button variant='outline-success' className='auth__footer-btn'>
                            Войти
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    )
}

export default Auth;