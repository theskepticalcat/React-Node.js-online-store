//Левый сайдбар-меню с типами устройств в магазине:

import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { ListGroup } from 'react-bootstrap';
import { Context } from '..';
import '../styles/typebar.scss';


const TypeBar = observer(() => {
    const {device} = useContext(Context);  //получаем device store

    return (
        <ListGroup className='typebar'>
            {device.types.map(type => {
                return(
                    <ListGroup.Item
                        key={type.id}
                        className='typebar__item'
                        onClick={() => device.setSelectedType(type)}
                        active={type.id === device.selectedType.id}
                    >
                        {type.name}
                    </ListGroup.Item>
                )})
            }
        </ListGroup>
    )
});

export default TypeBar;