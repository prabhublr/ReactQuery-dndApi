import { Box, Container, Divider, Typography } from "@mui/material";
import Spells from "./components/spells";

function App() {
  return (
    <Container className="App">
      <Box textAlign="center" mb={3}>
        <Typography mb={1} variant="h2" color="#950740">
          Duengon & Dragons
        </Typography>
        <Typography fontWeight={500} variant="inherit" color="#4e4e50">
          Duengon Dragons Spell Wiki
        </Typography>
      </Box>
      <Divider sx={{ borderColor: "#950740" }} />
      <Spells />
    </Container>
  );
}

export default App;
