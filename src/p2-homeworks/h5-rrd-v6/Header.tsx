import React from "react"
import PreJunior from "./pages/PreJunior";
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/JuniorPlus";

function Header() {
    return (
        <div>
            <PreJunior/>
            <Junior/>
            <JuniorPlus/>
        </div>
    )
}

export default Header
