import React, { useState } from 'react';
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs"; 
import { HiOutlineBars3 } from "react-icons/hi2"; 
import { Box, 
         Drawer,
         List,
         ListItem,
         ListItemButton,
         ListItemIcon,
         ListItemText,
       } from "@mui/material"; 
import HomeIcon from "@mui/icons-material/Home"; 
import Infolcon from "@mui/icons-material/Info";
import CommentRoundIcon from "@mui/icons-material/CommentRounded"; 
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded"; 
import ShoppingCartRoudendIcon from "@mui/icons-material/ShoppingCartRounded";

export const NavBar = () => {

    const [openMenu, setOpenMenu] = useState(false)
    const menuOptions = [
        {
        text: "Home",
        icon: <HomeIcon />
        },
        {
            text: "Sobre",
            icon: <Infolcon />
        },
        {
            text: "Depoimentos",
            icon: <CommentRoundIcon />
        },
        {
            text: "Contato",
            icon: <PhoneRoundedIcon />
        },
        {
            text:"Carrinho",
            icon:<ShoppingCartRoudendIcon />,
        },
        
    ];

  return <nav>
    <div className="nav-logo-container">
        <img src={Logo} alt=""/>
    </div>
    <div className="navbar-links-container">
        <a href="">Home</a>
        <a href="">Sobre</a>
        <a href="">Depoimentos</a>
        <a href="">Contato</a>
        <a href="">
            <BsCart2 className="navbar-cart-icon" />
        </a>
        <button className="primary-button" >Reserve agora</button>
    </div>
    <div className="navbar-menu-container">
    <HiOutlineBars3 onClick={ () => setOpenMenu(true)} />
    </div>
    <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
    <Box 
        sx={{ width : 250}}
        role="presentation"
        onclick={() => setOpenMenu(false)}
        onKeyDown={() => setOpenMenu(false)}
    >
    <List>
        {menuOptions.map((item) => (
            <ListItem key={item.text} disablePadding>
                 <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text}></ListItemText>    
                 </ListItemButton>
            </ListItem>
        ) ) }
    </List>
    </Box>
    </Drawer>
  </nav>
};
export default NavBar;
