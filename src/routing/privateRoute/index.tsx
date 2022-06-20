import React, {useEffect, useState} from "react";
import {Navigate, Outlet, useLocation} from "react-router-dom";

export const PrivateRoutes = () => {
    const location = useLocation();
    const [authData, setAuthData] = useState<boolean | null>(null);

    useEffect(() => {

        const authRawData = localStorage.getItem('auth')
        if (authRawData) {
            setAuthData(true)
        } else {
            setAuthData(false)
        }

    }, [])

    if (authData === null) {
        return <div>Loading</div>
    }


    return authData
        ? <Outlet/>
        : <Navigate to="/" replace state={{from: location}}/>

}
