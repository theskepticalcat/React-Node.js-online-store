import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import Row from 'react-bootstrap/Row';
import DeviceItem from './DeviceItem';

const DeviceList = observer(() => {

    const {device} = useContext(Context);  //вытаскиваем device из device store
    
    return (
        <Row className='d-flex mt-4'>
            {device.devices.map(device => {
                return (
                <DeviceItem key={device.id} device={device}/>   /*отрисовываем айтемы*/  /*как пропс device передаём текущий эл-нт итерации*/
                )
            })}
        </Row>
    )
});

export default DeviceList;