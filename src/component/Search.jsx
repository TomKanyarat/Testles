import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});

function Search() {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary">
        Themed Button
      </Button>
    </ThemeProvider>
  );
}

export default Search;
