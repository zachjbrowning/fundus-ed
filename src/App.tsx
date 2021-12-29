import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ErrorRoute from './components/routes/ErrorRoute';
import LandingRoute from "./components/routes/LandingRoute/LandingRoute";
import ManagementRoute from './components/routes/ManagementRoute';
import MoreRoute from './components/routes/MoreRoute';
import { routes } from './constants/routes';
import "./styles/index.scss"
import "./App.scss"
import CheatsheetRoute from './components/routes/CheatsheetRoute/CheatsheetRoute';
import store from './redux/store';
import { Provider } from 'react-redux';
import Nav from './components/shared/Nav/Nav';

export default function App() {
    return <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path={routes.LANDING_ROUTE} element={<div />} />
                <Route path={"*"} element={<Nav />} />
            </Routes>
            <Routes>
                <Route path={routes.LANDING_ROUTE} element={<LandingRoute />} />
                <Route path={routes.CHEATSHEET_ROUTE} element={<CheatsheetRoute />} />
                <Route path={routes.TUTORIAL_ROUTE} element={<ManagementRoute />} />
                <Route path={routes.MORE_ROUTE} element={<MoreRoute />} />
                <Route path={"*"} element={<ErrorRoute />} />
            </Routes>
        </BrowserRouter>
    </Provider>
}
