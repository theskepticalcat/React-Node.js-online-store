import { makeAutoObservable } from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильник'},
            {id: 2, name: 'Смартфон'},
            {id: 3, name: 'Ноутбук'},
            {id: 4, name: 'Наушники'}
        ];
        this._brands = [
            {id: 1, name: 'Sumsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'XiaoMi'},
            {id: 4, name: 'Lenovo'},
        ];
        this._devices = [
            {id: 1, name: 'Iphone 12 PRO', price: 25000, rating: 5, img: `https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png`},
            {id: 2, name: 'Iphone 12 PRO', price: 25000, rating: 5, img: `https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png`},
            {id: 3, name: 'Iphone 12 PRO', price: 25000, rating: 5, img: `https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png`},
            {id: 4, name: 'Iphone 12 PRO', price: 25000, rating: 5, img: `https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png`},
            {id: 5, name: 'Iphone 12 PRO', price: 25000, rating: 5, img: `https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png`},
            {id: 6, name: 'Iphone 12 PRO', price: 25000, rating: 5, img: `https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png`},
            {id: 7, name: 'Iphone 12 PRO', price: 25000, rating: 5, img: `https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png`},
            {id: 8, name: 'Iphone 12 PRO', price: 25000, rating: 5, img: `https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png`}
        ];
        this._selectedType = {};
        this._selectedBrand = {};
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

    setSelectedType(type) {
        this._selectedType = type;
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand;
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

    get selectedType() {
        return this._selectedType;
    }
    get selectedBrand() {
        return this._selectedBrand;
    }
}