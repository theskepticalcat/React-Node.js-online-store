import React, { useContext, useReducer, createContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/consts';
import { Context } from "../index";

function AppRouter() {
    const {user} = useContext(Context);     //наличие авторизации

    console.log(user);
    return (
        <Switch>
            {user.isAuth && authRoutes.map(({path, Component}) =>                 //если есть авторизация => пробегаемся по массиву с роутами
                <Route key={path} path={path} component={Component} exact/>  //отрисовываем роут для каждого в массиве роутов
            )}
            {publicRoutes.map(({path, Component}) =>       
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={SHOP_ROUTE}/>
        </Switch>
    )
}

export default AppRouter;