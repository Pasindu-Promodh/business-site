import { Box, Typography } from "@mui/material";

export default function Quote() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" fontWeight={600}>Quote</Typography>
      <Typography sx={{ mt: 2 }}>
        We craft high-quality pantries, gates, and furniture using the best materials and skilled hands.
      </Typography>
    </Box>
  );
}
