import {Routes, Route} from 'react-router-dom';
import SharedLayout from './SharedLayout'
import Home from '../pages/Home';
import {contentRoutes} from "./publicRoutes"
const Index = () => {

    return  (
        <>
            <Routes>
                <Route element={<SharedLayout />}>
                    <Route path='/' element={<Home />}/>
                    {contentRoutes.map((route, idx) => (
                        <Route key={idx} path={route.path} element={route.element} exact />
                    ))}
                </Route>
            </Routes>
        </>
    );

    }
export {Index};