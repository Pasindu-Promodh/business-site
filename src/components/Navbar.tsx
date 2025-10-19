// import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
// import { Link } from "react-router-dom";

// const navLinks = [
//   { title: "Home", path: "/" },
//   { title: "About", path: "/about" },
//   { title: "Services", path: "/services" },
//   { title: "Gallery", path: "/gallery" },
//   { title: "Contact", path: "/contact" },
//   { title: "Get a Quote", path: "/quote" },
// ];

// export default function Navbar() {
//   return (
//     <AppBar position="sticky" color="primary" elevation={0}>
//       <Toolbar sx={{ justifyContent: "space-between", px: 4 }}>
//         <Typography variant="h6" sx={{ fontWeight: 600, color: "secondary.main" }}>
//           CraftWorks
//         </Typography>
//         <Box>
//           {navLinks.map((link) => (
//             <Button
//               key={link.path}
//               component={Link}
//               to={link.path}
//               sx={{
//                 color: "white",
//                 mx: 1,
//                 fontWeight: 500,
//                 "&:hover": { color: "secondary.main" },
//               }}
//             >
//               {link.title}
//             </Button>
//           ))}
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// }

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { useState } from "react";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Services", path: "/services" },
  { title: "Gallery", path: "/gallery" },
  { title: "Contact", path: "/contact" },
  { title: "Get a Quote", path: "/quote" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawer = (
    <Box
      sx={{
        width: 240,
        bgcolor: "primary.main",
        height: "100%",
        color: "white",
        p: 2,
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h6" sx={{ color: "secondary.main" }}>
          CraftWorks
        </Typography>
        <IconButton onClick={handleDrawerToggle} sx={{ color: "white" }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navLinks.map((link) => (
          <ListItem
            // button
            key={link.path}
            component={Link}
            to={link.path}
            onClick={() => setMobileOpen(false)}
          >
            <ListItemText
              primary={link.title}
              primaryTypographyProps={{
                fontWeight: 500,
                sx: { "&:hover": { color: "secondary.main" }, color: "white"},
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" color="primary" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 4 } }}>
        {/* Logo */}
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, color: "secondary.main" }}
        >
          CraftWorks
        </Typography>

        {/* Desktop Links */}
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {navLinks.map((link) => (
            <Button
              key={link.path}
              component={Link}
              to={link.path}
              sx={{
                color: "white",
                mx: 1,
                fontWeight: 500,
                "&:hover": { color: "secondary.main" },
              }}
            >
              {link.title}
            </Button>
          ))}
        </Box>

        {/* Mobile Menu Icon */}
        <IconButton
          sx={{ display: { xs: "flex", md: "none" }, color: "white" }}
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}
