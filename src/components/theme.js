import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#94ceb9',
      main: '#2196f3',
      dark: '#2196f3',
      contrastText: '#FFF',
    },
    secondary: {
      light: '#de6787',
      main: '#2196f3',
      dark: '#c7c7c7',
      contrastText: '#000000',
    },
  },
});

export default theme;
