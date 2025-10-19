import {
  Box,
  Typography,
  Button,
  Paper,
  Container,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const MotionBox = motion(Box);

const services = [
  { title: "Custom Pantries", img: "https://placehold.co/600x400?text=Pantry" },
  { title: "Gates & Grills", img: "https://placehold.co/600x400?text=Gate" },
  { title: "Ceilings", img: "https://placehold.co/600x400?text=Ceiling" },
  { title: "Sofas & Furniture", img: "https://placehold.co/600x400?text=Sofa" },
  {
    title: "Roofing & Metal Work",
    img: "https://placehold.co/600x400?text=Roof",
  },
  {
    title: "Interior Finishing",
    img: "https://placehold.co/600x400?text=Interior",
  },
];

const projects = [
  "https://placehold.co/400x300?text=Project+1",
  "https://placehold.co/400x300?text=Project+2",
  "https://placehold.co/400x300?text=Project+3",
  "https://placehold.co/400x300?text=Project+4",
];

export default function Home() {
  return (
    <Box sx={{ bgcolor: "#f8f8f8", color: "#222", position: "relative" }}>
      {/* HERO SECTION */}
      <Box
        sx={{
          minHeight: { xs: "70vh", md: "85vh" },
          backgroundImage:
            "url('https://placehold.co/1600x800?text=Hero+Image')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 2,
        }}
      >
        <Box
          sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.55)" }}
        />
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          sx={{
            position: "relative",
            zIndex: 1,
            width: { xs: "100%", sm: "90%", md: "70%" },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: "white",
              fontSize: { xs: "1.9rem", md: "3rem" },
            }}
          >
            Craftsmanship that Transforms Spaces
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              color: "#e0e0e0",
              fontSize: { xs: "1rem", md: "1.2rem" },
            }}
          >
            From pantries to gates, we build with precision and passion.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            component={Link}
            to="/quote"
            sx={{
              mt: 4,
              fontWeight: 600,
              borderRadius: "30px",
              px: { xs: 3, md: 5 },
              py: { xs: 1, md: 1.2 },
              fontSize: { xs: "0.9rem", md: "1rem" },
            }}
          >
            Get a Free Quote
          </Button>
        </MotionBox>
      </Box>

      {/* SERVICES SECTION */}
      <Container sx={{ py: { xs: 6, md: 10 } }}>
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight={700}
          sx={{
            mb: { xs: 4, md: 6 },
            fontSize: { xs: "1.8rem", md: "2.2rem" },
          }}
        >
          Our Services
        </Typography>

        {/* Responsive CSS Grid */}
        <Box
          sx={{
            display: "grid",
            gap: { xs: 3, md: 4 },
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Paper
                elevation={5}
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  bgcolor: "white",
                  height: "100%",
                }}
              >
                <Box
                  component="img"
                  src={service.img}
                  alt={service.title}
                  sx={{
                    width: "100%",
                    height: { xs: 180, md: 220 },
                    objectFit: "cover",
                  }}
                />
                <Typography
                  variant="h6"
                  textAlign="center"
                  sx={{ py: 2, fontWeight: 600 }}
                >
                  {service.title}
                </Typography>
              </Paper>
            </motion.div>
          ))}
        </Box>
      </Container>

      {/* WHY CHOOSE US */}
      <Box
        sx={{
          backgroundColor: "#1e1e1e",
          color: "white",
          py: { xs: 6, md: 10 },
          textAlign: "center",
          px: 2,
        }}
      >
        <Typography
          variant="h4"
          fontWeight={700}
          sx={{ fontSize: { xs: "1.8rem", md: "2.2rem" } }}
        >
          Why Choose Us
        </Typography>
        <Divider
          sx={{
            bgcolor: "secondary.main",
            width: 80,
            height: 3,
            mx: "auto",
            my: 3,
            borderRadius: 2,
          }}
        />
        <Box
          sx={{
            display: "grid",
            gap: { xs: 3, md: 4 },
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            mt: 2,
          }}
        >
          {[
            {
              title: "Experienced Craftsmanship",
              desc: "Over a decade of hands-on expertise in design, metalwork, and woodcraft.",
            },
            {
              title: "Customized Solutions",
              desc: "We tailor every project to your vision, lifestyle, and space.",
            },
            {
              title: "Quality That Lasts",
              desc: "Built with the best materials, guaranteed to endure for years.",
            },
          ].map((item, i) => (
            <Box key={i}>
              <Typography
                variant="h6"
                color="secondary.main"
                fontWeight={600}
                sx={{ fontSize: { xs: "1.1rem", md: "1.3rem" } }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mt: 1,
                  opacity: 0.8,
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  px: { xs: 2, md: 4 },
                }}
              >
                {item.desc}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* FEATURED PROJECTS */}
      <Container sx={{ py: { xs: 6, md: 10 } }}>
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight={700}
          sx={{
            mb: { xs: 4, md: 6 },
            fontSize: { xs: "1.8rem", md: "2.2rem" },
          }}
        >
          Featured Projects
        </Typography>
        <Box
          sx={{
            display: "grid",
            gap: { xs: 3, md: 4 },
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
          }}
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Paper
                elevation={5}
                sx={{ borderRadius: 3, overflow: "hidden", cursor: "pointer" }}
              >
                <Box
                  component="img"
                  src={p}
                  alt={`Project ${i + 1}`}
                  sx={{
                    width: "100%",
                    height: { xs: 200, md: 220 },
                    objectFit: "cover",
                  }}
                />
              </Paper>
            </motion.div>
          ))}
        </Box>
      </Container>

      {/* CTA SECTION */}
      <Box
        sx={{
          backgroundColor: "#b58850",
          color: "white",
          py: { xs: 6, md: 8 },
          textAlign: "center",
          px: 2,
        }}
      >
        <Typography
          variant="h4"
          fontWeight={700}
          sx={{ fontSize: { xs: "1.9rem", md: "2.3rem" } }}
        >
          Let’s Build Something Beautiful
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mt: 1,
            mb: 4,
            opacity: 0.9,
            fontSize: { xs: "1rem", md: "1.1rem" },
          }}
        >
          Tell us about your dream project — we’ll make it a reality.
        </Typography>
        <Button
          variant="contained"
          size="large"
          component={Link}
          to="/quote"
          sx={{
            backgroundColor: "white",
            color: "#b58850",
            fontWeight: 600,
            borderRadius: "30px",
            px: { xs: 3, md: 5 },
            py: { xs: 1, md: 1.2 },
            "&:hover": { backgroundColor: "#f2f2f2" },
          }}
        >
          Contact Us
        </Button>
      </Box>

      {/* FLOATING WHATSAPP BUTTON */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Box
          component="a"
          href="https://wa.me/94779426823"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            position: "fixed",
            bottom: { xs: 20, md: 30 },
            right: { xs: 20, md: 30 },
            bgcolor: "#25D366",
            color: "white",
            borderRadius: "50%",
            width: { xs: 56, md: 64 },
            height: { xs: 56, md: 64 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0px 4px 15px rgba(0,0,0,0.3)",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "scale(1.1)",
              boxShadow: "0px 6px 20px rgba(0,0,0,0.4)",
            },
            zIndex: 1000,
          }}
        >
          <WhatsAppIcon sx={{ fontSize: { xs: 30, md: 34 } }} />
        </Box>
      </motion.div>
    </Box>
  );
}
