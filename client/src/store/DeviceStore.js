import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильник'},
            {id:2, name: 'Смартфон'}
        ]
        this._brands = [
            {id: 1, name: 'Sumsung'},
            {id: 2, name: 'Apple'}
        ]
        this._devices = [
            {id: 1, name: 'Iphone 12 PRO', price: 25000, rating: 5, img: `https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png`},
            {id: 1, name: 'Iphone 12 PRO', price: 25000, rating: 5, img: `https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png`},
            {id: 1, name: 'Iphone 12 PRO', price: 25000, rating: 5, img: `https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png`},
            {id: 1, name: 'Iphone 12 PRO', price: 25000, rating: 5, img: `https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png`}
        ]
        makeAutoObservable(this);  //mobx будет следить за изменениями этих элементов
    }


    setTypes(types) {           //экшены для изменения состояния
        this._types = types;
    }
    setBrands(brands) {
        this._brands = brands;
    }
    setDevices(devices) {
        this._devices = devices;
    }

    
    get types() {
        return this._types;
    }
    get brands() {
        return this._brands;
    }
    get devices() {
        return this._devices;
    }
}