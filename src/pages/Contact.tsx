import { Box, Typography } from "@mui/material";

export default function Contact() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" fontWeight={600}>Contact</Typography>
      <Typography sx={{ mt: 2 }}>
        We craft high-quality pantries, gates, and furniture using the best materials and skilled hands.
      </Typography>
    </Box>
  );
}
