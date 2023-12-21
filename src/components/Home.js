import { Typography, Container } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 4 }}>
      <Typography variant="h3" component="div" gutterBottom>
        Welcome to the Dashboard!
      </Typography>
      <Typography variant="body1" paragraph>
        Here, you can find important information and features.
      </Typography>

      {/* Tailwind CSS-styled content about the software company */}
      <div className="bg-gray-100 p-6 rounded-md shadow-md">
        <Typography variant="h4" component="div" gutterBottom>
          About Our Ecorfy Technologies PVT LTD
        </Typography>
        <Typography variant="body1" paragraph>
          We are a leading software company dedicated to delivering innovative solutions.
        </Typography>
        <Typography variant="body1" paragraph>
          Our team of experts strives to provide cutting-edge technology to meet your business needs.
        </Typography>
        <Typography variant="body1" paragraph>
          Explore our services and discover the future of software solutions.
        </Typography>
      </div>
    </Container>
  );
}
