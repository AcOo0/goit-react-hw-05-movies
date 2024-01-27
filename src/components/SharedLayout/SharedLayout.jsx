import { Outlet } from "react-router-dom";

import MainMenu from "components/MainMenu/ManeMenu";

const SharedLayout = () => {
    return (
        <>
            <MainMenu />
            <Outlet/>
        </>
    )
}

export default SharedLayout;