import Admin from "./pages/Admin";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import DevicePage from "./pages/DevicePage";

import { ADMIN_ROUTE, 
    BASKET_ROUTE, 
    DEVICE_ROUTE,
    SHOP_ROUTE,
    LOGIN_ROUTE, 
    REGISTRATION_ROUTE 
} from "./utils/consts";


export const authRoutes = [   //список маршрутов для авторизованных пользователей
    {
        path: ADMIN_ROUTE,    //ссылка
        Component: Admin      //сама страница
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
]

export const publicRoutes = [ //маршруты для любого пользователя
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage
    }
]