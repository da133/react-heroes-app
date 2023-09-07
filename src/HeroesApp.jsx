import { Outlet } from "react-router-dom";
import { Navbar } from "./ui";

export const HeroesApp = () => {
    return(
        <>
            <Navbar />
            {/*<h1>HeroesApp</h1>*/}

            <div className="container">
                <Outlet />
            </div>
        </>
        
    );
};