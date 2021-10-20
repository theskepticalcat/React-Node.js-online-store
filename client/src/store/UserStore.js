import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false;
        this._user = {};
        makeAutoObservable(this);  //mobx будет следить за изменениями этих элементов
    }


    setIsAuth(bool) {           //экшены для изменения состояния
        this._isAuth = bool;
    }
    setUser(bool) {
        this._isAuth = bool;
    }

    
    get isAuth() {
        return this._isAuth;
    }
    get user() {
        return this._user;
    }
}