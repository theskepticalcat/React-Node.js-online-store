import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Card, Row } from 'react-bootstrap';
import { Context } from '..';
import '../styles/brandbar.scss';

const BrandBar = observer(() => {
    const {device} = useContext(Context);

    return (
        <Row className='brandbar'>
            {device.brands.map(brand => {
                return (
                    <Card 
                        key={brand.id}
                        className='brandbar__item'
                        onClick={() => device.setSelectedBrand(brand)}
                        border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                    >
                        {brand.name}
                    </Card>
                )})
            }
        </Row>
    )
});

export default BrandBar
