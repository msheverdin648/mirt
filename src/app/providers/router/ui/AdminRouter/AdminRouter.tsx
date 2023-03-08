import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/RouteConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { PrivateRoute } from 'widgets/PrivateRoute/ui/PrivateRoute';
import cls from './AdminRouter.module.scss';

interface AdminRouterProps {
    className?: string;
}

export const AdminRouter: React.FC<AdminRouterProps> = (props) => {
    const { className } = props;

    return (
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
           <Route path='/admin' element={<PrivateRoute/>}>
            {Object.values(routeConfig).filter(({isAdmin})=>isAdmin).map(({path, element}) => (
              <Route key={path} path={path} element={( 
                  <div className={classNames(cls.AdminWrapper, {}, ['container'])}>
                      {element}
                  </div>
                )} />
                ))}
           </Route>
          </Routes>
        </Suspense>
 );
}