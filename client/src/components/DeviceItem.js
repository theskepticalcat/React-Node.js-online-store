import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import '../styles/device-item_card.scss';
import rating from '../assets/images/rating.png';
import { useHistory } from 'react-router';
import { DEVICE_ROUTE } from '../utils/consts';

function DeviceItem({device}) {     //принимаем пропс device из DeviceList
    const history = useHistory();    //делаем айтемы кликабельными
    console.log(history);

    return (
        <div className='device-item' onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
            <Col md={3}>
                <Card className='device-item__card' border={'light'}>
                    <Image src={device.img}/>
                    <div className='device-item__card-footer'>
                        <div>Sumsung</div>
                        <div className='rating'>
                            <div>{device.rating}</div>
                            <Image src={rating}/>
                        </div>
                    </div>
                    <div>{device.name}</div>
                </Card>
            </Col>
        </div>
    )
}

export default DeviceItem
