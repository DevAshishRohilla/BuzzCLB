import * as React from "react";
import { Box } from "@mui/material"
import Logo from "../imgs/BuzzClan.svg";

const Header =() => {
    return (
        <Box className="Header" sx={{textAlign:"center", padding:"16px 0 12px", background:"#f1f1f1"}}>
            <img src={Logo}/>
        </Box>
    )
}

export default Header