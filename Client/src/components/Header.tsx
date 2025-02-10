import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Toolbar, Typography, List,ListItem, Box, IconButton, Badge } from "@mui/material";
import { NavLink } from "react-router";

const links=[
  {title:"Home", path:"/"},
  {title:"Catalog", path:"/catalog"},
  {title:"Cart", path:"/cart"},
  {title:"Profile", path:"/profile"},
]

const navStyles={
  color:"inherit",
  textDecoration:"none", 
  "&.hover":{
    color:"text.primary"
  },
  "&.active":{
    color:"warning.main"
  }
}

export default function Header() {

  return(
    <AppBar position="static" sx={{mb:4}}>
      <Toolbar sx={{display:"flex",justifyContent:"space-between"}}>
        <Box sx={{display:"flex",alignItems:"center"}}>
        <Typography variant="h6" component="div">
          E-commer
          </Typography>
          <List sx={{display:"flex"}}>
            {links.map(link => 
              <ListItem component={NavLink} to={link.path} sx={navStyles}>{link.title}</ListItem>
            )}
          </List>
        </Box>

        <Box sx={{display:"flex",alignItems:"center"}}>
              <IconButton component={NavLink} to="/login" sx={{color:"inherit"}}>
              <Badge badgeContent="2" color="secondary">
                <ShoppingCart />
              </Badge>
              </IconButton>
          </Box>
      </Toolbar>
      </AppBar>
  );
}