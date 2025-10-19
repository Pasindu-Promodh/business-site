import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "#1e1e1e", color: "white", py: 4, textAlign: "center" }}>
      <Typography variant="body1">© {new Date().getFullYear()} CraftWorks</Typography>
      <Typography variant="body2" sx={{ opacity: 0.7 }}>
        Designed with passion in Sri Lanka
      </Typography>
    </Box>
  );
}
