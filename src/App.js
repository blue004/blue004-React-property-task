import { ThemeProvider} from "@mui/material";
import {theme} from "./theme";
import Routing from "./Routing";

function App() {
  return (
  <ThemeProvider theme={theme}>
      <Routing/>
  </ThemeProvider>
  );
}

export default App;
