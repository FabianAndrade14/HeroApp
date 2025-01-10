import { Route, Routes } from "react-router-dom"

import { DcPage, MarvelPage } from '../heroes/pages';

import { LoginPage } from "../auth/pages/LoginPage"
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
    return (
        <>
            <Routes>

                <Route path="/login" element={
                    <PublicRoute>
                        <LoginPage></LoginPage>
                    </PublicRoute>
                }
                
                />

                <Route path="/*" element={
                    <PrivateRouter>
                        <HeroesRoutes></HeroesRoutes>
                    </PrivateRouter>
                } />
                

                {/* <Route path="login" element={<LoginPage />} /> */}
                {/* <Route path="/*" element={<HeroesRoutes />} /> */}
            </Routes>
        </>
    )
}