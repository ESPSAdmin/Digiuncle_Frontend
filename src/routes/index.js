import { Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';
import SharedLayout from './SharedLayout'
import Home from '../pages/Home';
import { authRoutes, contentRoutes } from "./publicRoutes";
import RequiresAuth from './RequiresAuth';
import { useAuthContext } from '../context';
import { privateRoutes } from './privateRoutes';
const Index = () => {
    const location = useLocation();
    const { token } = useAuthContext();
    return (
        <>
            <Routes>

                <Route element={<SharedLayout />}>
                    <Route path='/' element={<Home />} />
                    {contentRoutes.map((route, idx) => (
                        <Route key={idx} path={route.path} element={route.element} exact />
                    ))}
                    {authRoutes.map((route, idx) => (
                            <Route key={idx} path={route.path} element={route.element} />
                    ))}
                    <Route element={<RequiresAuth />}>
                    {privateRoutes.map((route, idx) => (
                        <Route key={idx} path={route.path} element={route.element} />
                    ))}
                    </Route>
                </Route>
            </Routes>
        </>
    );

}
export { Index };